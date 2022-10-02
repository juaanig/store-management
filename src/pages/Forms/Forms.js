import React,{useState,useRef} from 'react'

import  TableUser  from 'react-bootstrap/Table';
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';


let Users = [] ;

//REGEXP PARA VALIDACIONES DE CAMPO NAME Y MAIL
let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
// ============================================

/* 
    ########################################################

    TERMINAR FUNCIONALIDAD DE MODIFICAR Y ELEMINAR USUARIO

    ########################################################

*/
const Forms = () => {

    const [showForm,setShowForm ] = useState(false);
    const [nameUser,setNameUser] = useState('');
    const [lastNameUser,setLastNameUser] = useState('');    
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [role,setRole] = useState(null);
    const [errors, setErrors] = useState({});

    const  nameTd = useRef(null)

    
    // Función para mostrar formulario
    const showFormHandler = (e) => {
        e.preventDefault();
        let aux = showForm ? false : true; 
        setShowForm(aux);
    }

    // Handlers para captar todos los valores del los input
    const nameHandler = (e) => setNameUser((e.target.value).trim());  
    const lastNameHandler = (e) => setLastNameUser((e.target.value).trim()); 
    const emailHandler = (e) => setEmail((e.target.value).trim()); 
    const passwordHandler = (e) => setPassword((e.target.value).trim()); 
    const roleHandler = (e) => setRole((e.target.value).trim())
    // ===================================================== 
    

    // VALIDACION DE FORM 
    const validateForm = (form) => {

        let _errors = {}
        console.log(form )
        
        if(form.name === ""){
            _errors.name  = 'Campo obligatorio.' ;
        }else if(!regexName.test(nameUser)){
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
        }
        //====================================
        if( form.password === '' ){
            _errors.pass = 'Campo obligatorio.';
        }else if(form.password.length < 10){
            _errors.pass = "la contraseña debe contener más de 10 caracteres";
        }
        //====================================
        if( form.role === null ){
            _errors.role = 'Campo obligatorio.';
        }

        return _errors;
    }

    const showDataFormHandler = () => {
        console.log(nameTd)
         
    }

    const submitUserHandler = (e) =>{
        e.preventDefault()
        const user = {
            name: nameUser,
            lastName:lastNameUser,
            email: email,
            password: password,
            role: role
        };
        
        let validate = validateForm(user)
        setErrors(validate)
        
        if(Object.entries(validate).length === 0){
            Users.push(user);

            setNameUser("");
            setLastNameUser("");
            setEmail("");
            setPassword("");
            setRole("");
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
                            {errors.name && <p>{errors.name}</p>}
                        </Form.Group>
                        <Form.Group className='mb-2'>
                            <Form.Control type="text" value={lastNameUser} placeholder='Apellido'  onChange={lastNameHandler}/>
                            {errors.lastName && <p>{errors.lastName}</p>}
                        </Form.Group>
                        <Form.Group className='mb-2'>
                            <Form.Control type="text" value={email} placeholder='e-mail'  onChange={emailHandler}/>
                            {errors.email && <p>{errors.email}</p>} 
                        </Form.Group>
                        <Form.Group className='mb-2'>
                            <Form.Control type="password" value={password}  placeholder='contraseña'  onChange={passwordHandler}/>
                            {errors.pass && <p>{errors.pass}</p>} 
                        </Form.Group>
                        <Form.Group className='mb-3'>
                            <Form.Select value={role}  onChange={roleHandler} >
                                <option >Seleccione un rol</option>
                                <option value="Vendedor">Vendedor</option>
                                <option value="Comprador">Comprador</option>
                                <option value="Deposito">Deposito</option>
                            </Form.Select>
                            {errors.role && <p>{errors.role}</p>} 
                        </Form.Group>
                        <Form.Group>
                            <Button type='button' variant='success' className='add-user' onClick={submitUserHandler}>Agregar operario</Button>
                        </Form.Group>
                    </Form>
                }  
            </div>
            <div className='container' breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}  minBreakpoint="xxs">
                <TableUser striped>
                    <th>Nombre</th>
                    <th>Apellido</th>
                    <th>Email</th>
                    <th>Rol</th>
                    <th>Modificar</th>
                    <th>Eliminar</th>
                    <tbody>
                        {Users.map((item,index) =>
                        <tr key={index}  >
                            <td ref={nameTd} value={item.name} >{item.name}</td>  
                            <td>{item.lastName}</td>          
                            <td>{item.email}</td>  
                            <td>{item.role}</td>  
                            <td><Button onClick={showDataFormHandler}>Modificar</Button></td>  
                            <td><Button variant='danger'>Eliminar</Button></td> 
                        </tr>
                        )}
                    </tbody>
                </TableUser>
            </div>
        </>
    )
}

export default Forms;