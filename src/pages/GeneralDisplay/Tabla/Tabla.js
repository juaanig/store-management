import React from 'react'
import "./Tabla.css";

const Tabla = ({nombre,cantidad,fi,fv,price}) => {
    
    return (
        <>
            <tr>
                <td>{nombre}</td>  
                <td>{cantidad}</td>          
                <td>{fi}</td>  
                <td>{fv}</td>  
                <td>u$d {price}</td>  
            </tr>
        </>
    )
}

export default Tabla;


// EN ESTE COMPONENTE SE RENDERIZARA LOS PRODUCTOS CON SUS RESPECTIVAS CARACTERISTICAS.
