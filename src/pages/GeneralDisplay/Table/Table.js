import React from 'react'
import "./Table.css";

const Tabla = ({products}) => {
    
    return (
        <>
            <div className='container'>
                <table>
                <th>Nombre</th>
                <th>Cantidad</th>
                <th>Fecha de ingreso</th>
                <th>Fecha de vencimiento</th>
                <th>Precio</th>
                <tbody>
                    {products.map((item) =>
                    <tr key={item.id}  >
                        <td>{item.nombre}</td>  
                        <td>{item.cantidad}</td>          
                        <td>{item.fi}</td>  
                        <td>{item.fv}</td>  
                        <td>u$d {item.price}</td>  
                    </tr>
                    )}
                </tbody>
                </table>
            </div>
            
        </>
    )
}

export default Tabla;


// EN ESTE COMPONENTE SE RENDERIZARA LOS PRODUCTOS CON SUS RESPECTIVAS CARACTERISTICAS.
