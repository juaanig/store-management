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
                        <label>Nombre del operario</label>
                        <input type="text"/>
                    </div>
                    <div>
                        <label>Apellido del operario</label>
                        <input type="text"/>
                    </div>
                    <div>
                        <label>E-mail del operario</label>
                        <select>
                            <option value="" disabled>select</option>
                            <option value="Vendedor">Vendedor</option>
                            <option value="Comprador">Comprador</option>
                            <option value="Deposito">Deposito</option>
                        </select>
                    </div>
                    <div>
                        <label>Rol del operario</label>
                        <input type="text"/>
                    </div>
                    <div>
                        <label>Contraseña del operario</label>
                        <input type="text"/>
                    </div>
                    <div>
                        <button type='submit' >Agregar operario</button>
                    </div>
                </form>
            }
        </>
    )
}

export default Forms;