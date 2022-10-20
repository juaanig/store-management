import React,{useState,useRef,useEffect, useContext} from 'react'
import { useAuth } from '../../hooks/hookAuth/useAuth';
import ThemeContext from '../../contexts/ThemeContext/ThemeContext'
import {useNavigate} from 'react-router-dom'

import  TableUser  from 'react-bootstrap/Table';
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

import { collection, addDoc,doc, deleteDoc, updateDoc} from 'firebase/firestore' ;
import { db } from '../../firebaseConfig/firebase' ;
import UserTable from '../../components/UserTable/UserTable';


//REGEX PARA VALIDACIONES DE CAMPO NAME Y MAIL
let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
// ============================================

const Forms = () => {

    let Users = [];
    
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
    const {getUsersToCompare,getList} = useAuth()
    const {theme} = useContext(ThemeContext)
    const navigate = useNavigate();

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
        
        const getUsers = async() => {
            const data = await getList();
            setAllUsers(data)
        }
        console.log("loop")

        getUsers();
        
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
        setSubmitButton(true);
        setEditButton(false);
    }

    // VALIDACION DE FORM 
    const validateForm = async (form) => {

        let _errors = {}
        if(form.name === ""){
            _errors.name  = 'Campo obligatorio.' ;
        }else if(!regexName.test(form.name)){
            _errors.name  = "El campo nombre solo acepta letras y espacios ";
        }
        //====================================

        if(form.lastName === ''){
            _errors.lastName = 'Campo obligatorio.';
        }else if(!regexName.test(form.lastName)){
            _errors.lastName= "El campo apellido solo acepta letras y espacios ";
        }
        //====================================
        if(form.email === ''){
            _errors.email= 'Campo obligatorio.';
        }else if(!regexEmail.test(form.email)){
            _errors.email = "email incorrecto";
        }else 
        //====================================
        if( form.password === '' ){
            _errors.pass = 'Campo obligatorio.';
        }else if(form.password.length < 10){
            _errors.pass = "la contraseña debe contener más de 10 caracteres";
        }
    
        
        //====================================
        if( form.role === "" ){
            _errors.role = 'Campo obligatorio.';
        }
        //====================================
        if(! (await getUsersToCompare(form.email)).result){
            _errors.user = "email ya registrado";
        }
        return _errors;
    }

    const modifyDataFormHandler = (index) => {

        //llamar a la base de datos de firebase y colocar los datos en el formulario para que el usuario pueda modificarlos

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

    const deleteRowUserHandler = async (id) => {
        const userDoc = doc(db,"users", id)
        await deleteDoc(userDoc)
        setAllUsers(await getList())
    }

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

    const submitUserHandler = async () =>{
        
        let validate = await validateForm(setUser())
        setErrors(validate)

        
        if(Object.entries(validate).length === 0){
            Users.push(setUser());
            await addDoc(usersCollection,setUser())
            cleanInputs();
            setAllUsers(await getList())
        }
    }

    //Función para editar usuario 
    const editUserHandler = async () => {
        
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
    }

    return (
        <>  
            <div className='container mb-5' breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}  minBreakpoint="xxs">
                <div className='container mt-3 mb-3'>
                    { showForm ? <Button onClick={showFormHandler} variant='danger'>cancelar</Button> : <Button className='' onClick={showFormHandler} >Nuevo operario</Button>}
                </div>
                { showForm &&
                    <Form>
                        <Form.Group className='mb-2'>
                            <Form.Control type="text" value={nameUser} placeholder='Nombre del operario'  onChange={nameHandler}/>
                            {errors.name && <p className="text-danger" >{errors.name}</p>}
                        </Form.Group>
                        <Form.Group className='mb-2'>
                            <Form.Control type="text" value={lastNameUser} placeholder='Apellido'  onChange={lastNameHandler}/>
                            {errors.lastName && <p className="text-danger">{errors.lastName}</p>}
                        </Form.Group>
                        <Form.Group className='mb-2'>
                            <Form.Control type="text" value={email} placeholder='e-mail'  onChange={emailHandler}/>
                            {errors.email && <p className="text-danger">{errors.email}</p>} 
                            {errors.user && <p className="text-danger">{errors.user}</p>}
                        </Form.Group>
                        <Form.Group className='mb-2'>
                            <Form.Control type="password" value={password} placeholder='contraseña'  onChange={passwordHandler}/>
                            {errors.pass && <p className="text-danger">{errors.pass}</p>} 
                        </Form.Group>
                        <Form.Group className='mb-3'>
                            <Form.Select value={role}  onChange={roleHandler} >
                                <option value="" >Seleccione un rol</option>
                                <option value="Vendedor">Vendedor</option>
                                <option value="Comprador">Comprador</option>
                                <option value="Deposito">Deposito</option>
                            </Form.Select>
                            {errors.role && <p className="text-danger">{errors.role}</p>} 
                        </Form.Group>
                        <Form.Group>
                            { submitButton && <Button type='button' variant='success' className='add-user me-3' onClick={submitUserHandler}>Agregar operario</Button>}
                            { editButton && <Button type='button' variant='warning' className='add-user' onClick={editUserHandler}>Editar operario</Button>}
                        </Form.Group>
                    </Form>
                }  
            </div>
            <div className={'container'} breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}  minBreakpoint="xxs">
                <TableUser striped variant={theme} className="text-center">
                    <th>Nombre</th>
                    <th>Apellido</th>
                    <th>Email</th>
                    <th>Rol</th>
                    <th>Modificar</th>
                    <th>Eliminar</th>
                    <tbody ref={tBody} className="mt-3">
                        <UserTable 
                        users={allUsers} 
                        modifyDataFormHandler={modifyDataFormHandler} 
                        deleteRowUserHandler={deleteRowUserHandler}
                        />
                    </tbody>
                </TableUser>
            </div>
        </>
    )
}

export default Forms;