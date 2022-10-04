
import { useState } from "react";
import "./Login.css";

const Login = () => {


  let regexPassword =/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/;
  let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
  let emailValidation = true
  let passwordValidation= true
  

  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');

  const mailError = document.getElementById('mailError');
  const passwordError = document.getElementById('passwordError');

  function handleChange(name , value){


    if(name==='user'){
      setUser(value);
      
    }
    
    if(name==='password'){
      setPassword(value);
      
    }
  }
  
  console.log('user: ', user)
  console.log('password: ', password)

    const handleSubmit = (e) => {
      e.preventDefault();

      let account = 
      {   
        user:user, 
        password:password,
      } ;
 
      if(!regexEmail.test(account.user)){
        emailValidation=false;
        console.log(emailValidation);
        mailError.style.display = 'show'; // show

      }

      if(!regexPassword.test(account.password)){
        passwordValidation=false;
        console.log(passwordValidation);
        /*min 1Dígito, minúsculas y mayúsculas 8 a 16 caracteres*/
        passwordError.style.display = 'show'; // show
     
      }
      
      if(passwordValidation=== true && emailValidation=== true){
       
        account.user = user;
        account.password = password;
        console.log('account: ', account);
        alert("Bienvenido");
      }
    }

  
  return (
    
    <div className="form-container">
      <form className="form">
        <div className="form-content">
          <h3 className="form-title">Inicio de sesión</h3>
          <div className="form-group">
            <input id="user" name="user" type="email" placeholder="Ingrese correo electrónico" onChange={(e) => handleChange(e.target.name, e.target.value)}/>
          </div>
          <p id="mailError" className="mailError">Mail incorrecto </p>
          <div className="form-group">
            <input id="password" name="password" type="password" placeholder="Ingrese contraseña" onChange={(e) => handleChange(e.target.name, e.target.value)}/>
          </div>
          <p id="passwordError" className="passwordError">Contraseña incorrecta</p>
          <div className="submit-container">
            <button id="button" name="button" type="submit" className="submit-button" onClick={handleSubmit}>
              Iniciar
            </button>
          </div>
          <p className="forgot-password">
            <a href="login">Olvidó su contraseña?</a>
          </p>
        </div>
      </form>
    </div>
  )
}

export default Login