import React,{useState,useRef,useEffect, useContext} from 'react'
import {useUsers} from '../../hooks/hookUser/useUser'
import { useAuth } from '../../hooks/hookAuth/useAuth';
import { useValidate } from '../../hooks/hookValidate/useValidate';
import ThemeContext from '../../contexts/ThemeContext/ThemeContext'
import AuthContext from '../../contexts/authContext/AuthContext'
import RequestProducts from '../../contexts/requestsContext/requestProdContext';

import { collection, addDoc,doc, deleteDoc, updateDoc} from 'firebase/firestore' ;
import { db } from '../../firebaseConfig/firebase' ;
import UserTable from '../../components/UserTable/UserTable';
import FormUsers from '../../components/FormUsers/FormUsers';
import Loader from '../../components/Loader/Loader';

const DashboardSU = () => {

    const [errors, setErrors] = useState({});
    const [showForm,setShowForm ] = useState(false);
    const [submitButton, setSubmitButton] = useState(true);
    const [editButton, setEditButton] = useState(false);
    const [nameUser,setNameUser] = useState('');
    const [lastNameUser,setLastNameUser] = useState('');    
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [role,setRole] = useState("");
    const [currentId,setCurrentId] = useState('');
    const [allUsers,setAllUsers] = useState([])

    const {validateForm} = useValidate();
    const {getList} = useAuth()
    
    const { theme } = useContext(ThemeContext)
    const { showLoader, setShowLoader } = useContext(AuthContext)
    const { listUser, setListUsers} = useContext(RequestProducts)
    const {submitHandler} =useUsers()

    const tBody = useRef()
    
    const usersCollection = collection(db, "users"); 

    const cleanInputs = () => { 
        setNameUser('');
        setLastNameUser('');
        setEmail('');
        setPassword('');
        setRole('');
    }
  
    useEffect(() => {
        setAllUsers(listUser)
        console.log("loop en users dashboard")
    },[])

    // Handlers para captar todos los valores del los input
    const nameHandler = (e) => setNameUser((e.target.value));  
    const lastNameHandler = (e) => setLastNameUser((e.target.value)); 
    const emailHandler = (e) => setEmail((e.target.value)); 
    const roleHandler = (e) => setRole((e.target.value));
    const passwordHandler = (e) => setPassword((e.target.value));
    // ===================================================== 

    // Función para mostrar formulario
    const showFormHandler = (e) => {
        e.preventDefault();
        let aux = showForm ? false : true; 
        setShowForm(aux);
        cleanInputs();
        setErrors({});
        setSubmitButton(true);
        setEditButton(false);
    }

    //llamar a la base de datos de firebase y colocar los datos en el formulario para que el usuario pueda modificarlos
    const modifyDataFormHandler = (index) => {
        setNameUser(allUsers[index].name);
        setLastNameUser(allUsers[index].lastName);
        setEmail(allUsers[index].email);
        setPassword(allUsers[index].password);
        setRole(allUsers[index].role);

        setCurrentId(allUsers[index].id);

        setShowForm(true);
        setSubmitButton(false);
        setEditButton(true)
    }

    // Función para eliminar un usuario
    const deleteRowUserHandler = async (id) => {
        setShowLoader(true)
        const userDoc = doc(db,"users", id)
        await deleteDoc(userDoc)
        setAllUsers(await getList())
        setShowLoader(false)
    }

    // Funcion setear los valores del formulario en un objeto
    const setUser = () => {
        const user = {
            name: nameUser.trim(),
            lastName:lastNameUser.trim(),
            email: email.trim(),
            password: password.trim(),
            role: role,
        };

        return user;
    }

    // Función para enviar los datos del formulario a la base de datos
    const submitUserHandler = async () =>{
        submitHandler(setUser())
    }

    //Función para editar usuario 
    const editUserHandler = async () => {
        
        setShowLoader(true)
        const oldUser = doc(db,"users",currentId)
        
        let validate = await validateForm(setUser())  
        delete validate.user;
        setErrors(validate)

        if(Object.entries(validate).length === 0){  
            await updateDoc(oldUser,setUser())
            cleanInputs();
            setSubmitButton(true);
            setEditButton(false);
            setAllUsers(await getList())
        }
        setShowLoader(false)
    }

    return (
        <>  
            <FormUsers
                showForm={showForm}
                showFormHandler={showFormHandler}
                submitButton={submitButton}
                editButton={editButton}
                nameHandler={nameHandler}
                lastNameHandler={lastNameHandler}
                emailHandler={emailHandler}
                roleHandler={roleHandler}
                passwordHandler={passwordHandler}
                submitUserHandler={submitUserHandler}
                editUserHandler={editUserHandler}
                user={setUser()}
                errors={errors}
            />
            {showLoader && <Loader/>}
            <UserTable 
                theme={theme}
                tBody={tBody}
                users={listUser} 
                modifyDataFormHandler={modifyDataFormHandler} 
                deleteRowUserHandler={deleteRowUserHandler}
            />
        </>
    )
}

export default DashboardSU;