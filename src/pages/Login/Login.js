import { useState } from "react";
import { Form, Button, Container, FloatingLabel  } from 'react-bootstrap';
import { useAuth } from "../../hooks/hookAuth/useAuth";

/* INVESTIGAR USEASYN Y USEFETCH */

const Login = () => {

  let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;

  const [errors, setErrors] = useState({});
  
  const [mail, setMail] = useState('');
  const [password, setPassword] = useState('');
  
  const {getUsersToCompare,getPassToCompare} = useAuth()  
  
  const mailChangeHandler = (e) => {
    setMail(e.target.value);
  }

  const passwordChangeHandler = (e) => {
    setPassword(e.target.value);
  }
  
   const validateForm = async (form) => {

    let _errors = {}

    //====================================
    if(form.email === ''){
      _errors.email= 'Campo obligatorio.';
    }else if(!regexEmail.test(form.email)){
      _errors.email = "email incorrecto";
    }else if(await getUsersToCompare(form.email)){
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
    console.log(getUsersToCompare(form.email))
    
    if(Object.entries(validate).length === 0){
      console.log('submit')
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