import { useState,useContext } from "react";
import { useNavigate } from "react-router-dom";

import { Form, Button, Container, InputGroup } from 'react-bootstrap';

import { getDoc,doc } from "firebase/firestore";
import { db } from '../../firebaseConfig/firebase' ;
import { useAuth } from "../../hooks/hookAuth/useAuth";
import { Validate } from "../../hooks/hookValidate/Validate";
import  AuthContext  from "../../contexts/authContext/AuthContext";

import Loader from '../Loader/Loader';

const Login = () => {
  
  
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const [mail, setMail] = useState('');
  const [password, setPassword] = useState('');
  
  const {setInfoHandler, icon, showPasswordHandler, visiblePassword, showLoader, setShowLoader} = useContext(AuthContext);

  const {getUsersToCompare} = useAuth();
  const {validateLogin} = Validate();  
  
  const mailChangeHandler = (e) => setMail(e.target.value);
  const passwordChangeHandler = (e) => setPassword(e.target.value);
  
  

  const submitHandler = async () => {

    setShowLoader(true);

    let form = {
      email: mail,
      password: password
    }

    let validate = await validateLogin(form)
    setErrors(validate)
    
    if(Object.entries(validate).length === 0){
      
      let id = (await getUsersToCompare(form.email)).uid
      let preDataUser = await getDoc(doc(db,"users",id))
      let auxUser = preDataUser.data() 
      setInfoHandler({...auxUser,id:id,status:true})
      auxUser.role === "admin" ? navigate("/superUser") : navigate("/general");
      localStorage.setItem("USER",JSON.stringify(auxUser,delete auxUser.password))
    }
    setShowLoader(false);
  }
  
  return (    
    <>
      <Container className="mt-5">
        <Form className="mx-auto">
          <h1 className="mb-3">Iniciar sesion</h1>
          <Form.Group className='mb-2'>
            <Form.Control type="email" placeholder="Ingrese su correo electrónico" onChange={mailChangeHandler} value={mail}/>
            {errors.email && <p className="text-danger">{errors.email}</p>}
          </Form.Group>
          <Form.Group className='mb-2'>
            <InputGroup>
              <Form.Control type={visiblePassword} placeholder="Ingrese contraseña" onChange={passwordChangeHandler} value={password}/>
              <Button variant="outline-secondary" className='bg-light' onClick={showPasswordHandler}><img src={process.env.PUBLIC_URL+icon} alt={"EyeImage"} style={{ width: "20px" }}></img></Button>
            </InputGroup>
            {errors.pass && <p className="text-danger">{errors.pass}</p>}
          </Form.Group>
          <Form.Group>
            <Button type='button' variant='success' className='add-user' onClick={submitHandler}>Iniciar</Button>
          </Form.Group>
        </Form>
      </Container>
      {showLoader && <Loader/>}
    </>
  )
}

export default Login