import { useState } from "react";
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const Login = () => {

  let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;

  
  const [errors, setErrors] = useState({});

  const [mail, setMail] = useState('');
  const [password, setPassword] = useState('');

  const mailChangeHandler = (e) => {
    setMail(e.target.value);
  }

  const passwordChangeHandler = (e) => {
    setPassword(e.target.value);
  }
  
  const validateForm = (form) => {

    let _errors = {}
    
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

    console.log(_errors)

    return _errors;
}

  const submitHandler = (e) => {
    e.preventDefault();

    let form = {
      email: mail,
      password: password
    }

    let validate = validateForm(form)
    setErrors(validate)
    
    if(Object.entries(validate).length === 0){
      console.log('submit')
    }
  }
  
  return (
    
    <div className="container">
      <div className="container mt-5">
        <h1>Iniciar sesion</h1>
        <Form>
          <Col xs={5}>
            <Row >
              <Form.Group className='mb-2'>
                  <Form.Control type="email" placeholder="Ingrese correo electrónico" onChange={mailChangeHandler} value={mail}/>
                  {errors.email && <p className="text-danger">{errors.email}</p>} 
              </Form.Group>
            </Row >
            <Row>
              <Form.Group className='mb-2'>
                  <Form.Control type="password" placeholder="Ingrese contraseña" onChange={passwordChangeHandler} value={password}/>
                  {errors.pass && <p className="text-danger">{errors.pass}</p>} 
              </Form.Group>
            </Row>
            <Row>
              <Form.Group>
                  <Button type='button' variant='success' className='add-user' onClick={submitHandler}>Iniciar</Button>
              </Form.Group>
            </Row>
          </Col>
        </Form>
      </div>
    </div>
  )
}

export default Login