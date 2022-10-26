import React,{useEffect, useState} from 'react'

import  TableProducts from 'react-bootstrap/Table';
import { useContext } from 'react';
import ThemeContext from '../../contexts/ThemeContext/ThemeContext';

import {useProduct} from '../../hooks/hookProduct/useProduct'; 

const Tabla = () => {

    const [products,setProducts] = useState([])
    const {getListProducts} = useProduct() ;

    useEffect(()=>{

        const listProduct = async()=>{
            setProducts(await getListProducts())
        }

        listProduct()
    },[])


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
                        <td>{item.productName}</td>  
                        <td>{item.amount}</td>          
                        <td>{item.elaborationDate}</td>  
                        <td>{item.expirationDate}</td>  
                        <td>{item.price}</td>  
                    </tr>
                    )}
                </tbody>
                </TableProducts>
            </div>
        </>
    )
}

export default Tabla;