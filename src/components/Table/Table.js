import React from 'react'

import  TableProducts from 'react-bootstrap/Table';
import { useContext } from 'react';
import ThemeContext from '../../contexts/ThemeContext/ThemeContext';


const Tabla = ({products}) => {

    const {theme} = useContext(ThemeContext)
    
    return (
        <>
            <div className='container' breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}  minBreakpoint="xxs" bordered >
                <TableProducts striped hover variant={theme} className='text-center'>
                <thead >
                    <th>Nombre</th>
                    <th>Cantidad</th>
                    <th>Fecha de ingreso</th>
                    <th>Fecha de vencimiento</th>
                    <th>Precio</th>
                </thead>    
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
                </TableProducts>
            </div>
        </>
    )
}

export default Tabla;


// EN ESTE COMPONENTE SE RENDERIZARA LOS PRODUCTOS CON SUS RESPECTIVAS CARACTERISTICAS.
