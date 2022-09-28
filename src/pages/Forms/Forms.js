import React,{useState} from 'react'

import "./Form.css";

let Users = [] ;

const Forms = () => {

    const [showButton,setShowButton ] = useState(false);
    const [nameUser,setNameUser] = useState();
    const [lastNameUser,setLastNameUser] = useState();    
    const [email,setEmail] = useState();
    const [password,setPassword] = useState();
    const [role,setRole] = useState();


    const showButtonHandler = (e) => {
        e.preventDefault();
        let aux = showButton ? false : true; 
        setShowButton(aux);
    }
    /* Hacer una funcion para captar todos los valores del los input y que los almacene en un arreglo de objetos */

    const nameHandler = (e) => setNameUser(e.target.value);  

    const lastNameHandler = (e) => setLastNameUser(e.target.value); 
    
    const emailHandler = (e) => setEmail(e.target.value); 
     
    const passwordHandler = (e) => setPassword(e.target.value); 
    
    const roleHandler = (e) => setRole(e.target.value)
    

    const submitUserHandler = (event) =>{
        event.preventDefault();
        const user = {
            name: nameUser,
            lastName:lastNameUser,
            email: email,
            passsword: password,
            role: role
        };
        Users.push(user);
        console.log(Users)

        setNameUser("");
        setLastNameUser("");
        setEmail("");
        setPassword("");
    }

    return (
        <>  
            <div className='container-button'>
                <button onClick={showButtonHandler}>Nuevo operario</button>
            </div>
            { showButton &&

                <form className='form-style'>
                    <div>
                        <input type="text" value={nameUser} placeholder='Nombre del operario' onChange={nameHandler}/>
                    </div>
                    <div>
                        <input type="text" value={lastNameUser} placeholder='Apellido' onChange={lastNameHandler}/>
                    </div>
                    
                    <div>
                        <input type="text" value={email} placeholder='e-mail' onChange={emailHandler}/> 
                    </div>
                    <div>
                        <input type="password" value={password}  placeholder='contraseña' onChange={passwordHandler}/>
                    </div>
                    <div>
                        <select onChange={roleHandler} value="role">
                            <option value="Vendedor">Vendedor</option>
                            <option value="Comprador">Comprador</option>
                            <option value="Deposito">Deposito</option>
                        </select>
                    </div>
                    <div>
                        <button type='submit' className='add-user' onClick={submitUserHandler}>Agregar operario</button>
                    </div>
                </form>
            }
            
            <div className='container'>
                <table>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>Email</th>
                <th>Rol</th>
                <th>Borrar</th>
                <th>Eliminar</th>
                <tbody>
                    {Users.map((item,index) =>
                    <tr key={index}  >
                        <td>{item.name}</td>  
                        <td>{item.lastName}</td>          
                        <td>{item.email}</td>  
                        <td>{item.role}</td>  
                        <td><button>Modificar</button></td>  
                        <td><button>Eliminar</button></td> 
                    </tr>
                    )}
                </tbody>
                </table>
            </div>
        </>
    )
}

export default Forms;