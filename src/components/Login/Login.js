import { useState,useContext } from "react";
import { useNavigate } from "react-router-dom";

import { Form, Button, Container, FloatingLabel  } from 'react-bootstrap';

import { getDoc,doc } from "firebase/firestore";
import { db } from '../../firebaseConfig/firebase' ;
import { useAuth } from "../../hooks/hookAuth/useAuth";
import  AuthContext  from "../../contexts/authContext/AuthContext";

let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;


const Login = () => {
  
  
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const [mail, setMail] = useState('');
  const [password, setPassword] = useState('');
  
  const {setInfoHandler} = useContext(AuthContext);

  const {getUsersToCompare,getPassToCompare} = useAuth();  
  
  const mailChangeHandler = (e) => setMail(e.target.value);
  const passwordChangeHandler = (e) => setPassword(e.target.value);
  
  const validateForm = async (form) => {

    let _errors = {}

    //====================================
    if(form.email === ''){
      _errors.email= 'Campo obligatorio.';
    }else if(!regexEmail.test(form.email)){
      _errors.email = "email incorrecto";
    }else if((await getUsersToCompare(form.email)).result){
      _errors.email = "email no registrado";

    }
    //====================================
    if( form.password === '' ){
        _errors.pass = 'Campo obligatorio.';
    }else if(await getPassToCompare(form.password)){
        _errors.pass = "contraseña incorrecta";
    }

    return _errors;
  }

  const submitHandler = async () => {

    let form = {
      email: mail,
      password: password
    }

    let validate = await validateForm(form)
    setErrors(validate)
    
    if(Object.entries(validate).length === 0){
      
      let id = (await getUsersToCompare(form.email)).uid
      let preDataUser = await getDoc(doc(db,"users",id))
      let auxUser = preDataUser.data() 
      setInfoHandler({...auxUser,id:id,status:true})
      auxUser.role === "admin" ? navigate("/superUser") : navigate("/general");
      localStorage.setItem("USER",JSON.stringify(auxUser,delete auxUser.password))
    }
  }
  
  return (    
    <Container className="mt-5">
      <Form className="mx-auto" >
        <h1 className="mb-3">Iniciar sesion</h1>
        <Form.Group className='mb-2'>
          <FloatingLabel label="Correo electrónico" className="mb-2">
            <Form.Control type="email" placeholder="a" onChange={mailChangeHandler} value={mail}/>
          </FloatingLabel>
          {errors.email && <p className="text-danger">{errors.email}</p>}
        </Form.Group>
        <Form.Group className='mb-2'>
          <FloatingLabel label="Contraseña" className="mb-2">
            <Form.Control type="password" placeholder="Ingrese contraseña" onChange={passwordChangeHandler} value={password}/>
          </FloatingLabel>
          {errors.pass && <p className="text-danger">{errors.pass}</p>}
        </Form.Group>
        <Form.Group>
          <Button type='button' variant='success' className='add-user' onClick={submitHandler}>Iniciar</Button>
        </Form.Group>
      </Form>
    </Container>
  )
}

export default Login