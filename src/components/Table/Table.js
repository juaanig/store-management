import React,{useEffect} from 'react'

import TableProducts from 'react-bootstrap/Table';

import {useProduct} from '../../hooks/hookProduct/useProduct'; 

const Tabla = ({products}) => {

    const {getListProducts} = useProduct() ;

    useEffect(()=>{
        const listProduct = async()=>{
            console.log(await getListProducts())
        }

        listProduct()
    },[])


    return (
        <>
            <div className='container' breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}  minBreakpoint="xxs" bordered>
                <TableProducts striped hover>
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
