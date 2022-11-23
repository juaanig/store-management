import React,{useState,useRef, useContext} from 'react'
import {useUser} from '../../hooks/hookUser/useUser'
import { useAuth } from '../../hooks/hookAuth/useAuth';
import { useValidate } from '../../hooks/hookValidate/useValidate';
import ThemeContext from '../../contexts/ThemeContext/ThemeContext'
import RequestProducts from '../../contexts/requestsContext/requestProdContext';

import { collection, addDoc,doc, deleteDoc, updateDoc} from 'firebase/firestore' ;
import { db } from '../../firebaseConfig/firebase' ;
import UserTable from '../../components/UserTable/UserTable';
import FormUsers from '../../components/FormUsers/FormUsers';
import Loader from '../../components/Loader/Loader';
import ProductContext from '../../contexts/productsContext/ProductContext';

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

    const {validateForm} = useValidate();
    const {getList} = useAuth()
    
    const { theme } = useContext(ThemeContext)
    const { showLoader, setShowLoader } = useContext(ProductContext)
    const { listUser, setListUsers} = useContext(RequestProducts)
    const {createUser, deleteUser, updateUser} =useUser()

    const tBody = useRef()
    
    const usersCollection = collection(db, "users"); 

    const cleanInputs = () => { 
        setNameUser('');
        setLastNameUser('');
        setEmail('');
        setPassword('');
        setRole('');
    }

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
        setShowLoader(true)
        let validate = await validateForm(setUser())
        setErrors(validate)

        if(Object.entries(validate).length === 0){
            createUser(setUser())
            cleanInputs();
            //setlistUser(await getList())
        }
        setShowLoader(false)
    }
    
    // Función para eliminar un usuario
    const deleteRowUserHandler = (id) => {
        console.log("entré")
        setShowLoader(true)
        deleteUser(id)
        setShowLoader(false)
    }

    //llamar a la base de datos de firebase y colocar los datos en el formulario para que el usuario pueda modificarlos
    const modifyDataFormHandler = (index) => {
        setNameUser(listUser[index].name);
        setLastNameUser(listUser[index].lastName);
        setEmail(listUser[index].email);
        setPassword(listUser[index].password);
        setRole(listUser[index].role);
        setCurrentId(listUser[index].id);

        setShowForm(true);
        setSubmitButton(false);
        setEditButton(true)
    }

    //Función para editar usuario 
    const editUserHandler = async () => {
        
        let auxUser = setUser()
        setShowLoader(true)
        
        let validate = await validateForm(auxUser)  
        delete validate.user;
        setErrors(validate)
        
        if(Object.entries(validate).length === 0){  
            updateUser(auxUser,currentId)
            cleanInputs();
            setSubmitButton(true);
            setEditButton(false);
            //setlistUser(await getList())
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