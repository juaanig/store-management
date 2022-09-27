import React,{useState} from 'react'

import "./Form.css";

const Forms = () => {

    const [showButton,setShowButton ] = useState(false);

    const showButtonHandler = (e) => {
        e.preventDefault();
        let aux = showButton ? false : true; 
        setShowButton(aux);
    }
  
    return (
        <>  
            <div className='container-button'>
                <button onClick={showButtonHandler}>Nuevo operario</button>
            </div>
            { showButton &&

                <form className='form-style'>
                    <div>
                        <input type="text" placeholder='Nombre del operario'/>
                    </div>
                    <div>
                        <input type="text" placeholder='Apellido'/>
                    </div>
                    
                    <div>
                        <input type="text" placeholder='e-mail'/>
                    </div>
                    <div>
                        <input type="password" placeholder='contraseña'/>
                    </div>
                    <div>
                        <select >
                            <option value="" disabled selected>Rol del operario</option>
                            <option value="Vendedor">Vendedor</option>
                            <option value="Comprador">Comprador</option>
                            <option value="Deposito">Deposito</option>
                        </select>
                    </div>
                    <div>
                        <button type='submit' className='add-user' >Agregar operario</button>
                    </div>
                </form>
            }
        </>
    )
}

export default Forms;