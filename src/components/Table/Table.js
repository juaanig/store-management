import React,{useEffect} from 'react'

import  TableProducts from 'react-bootstrap/Table';
import {Button} from 'react-bootstrap'

import { useContext } from 'react';
import ThemeContext from '../../contexts/ThemeContext/ThemeContext';
import {useProduct} from '../../hooks/hookProduct/useProduct'; 
import ProductContext from '../../contexts/productsContext/ProductContext';

const Tabla = () => {

    const {theme} = useContext(ThemeContext)
    const {update,setUpdate} = useContext(ProductContext)
    const {setProductsHandler, products, getListProducts, deleteProductHandler} = useProduct() ;

    const listProduct = async()=>{
        setProductsHandler(await getListProducts())
    }

    useEffect(()=>{ 
        listProduct()
    },[])


    if(update){
        listProduct();
        setUpdate(false)
    }

    //TODO HACER LOGICA MODIFICAR PRODUCTO
    const modifyDataFormHandler = () => {
        console.log("modificado")
    }

    const deleteRowProductHandler = (id) => {
        deleteProductHandler(id)
        setUpdate(true)
    }
    
    return (
        <>
            <div className='container section' breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}  minBreakpoint="xxs" bordered >
                <TableProducts striped hover variant={theme} className='text-center'>
                <thead >
                    <th>Nombre</th>
                    <th>Cantidad</th>
                    <th>Precio</th>
                    <th>Fecha de ingreso</th>
                    <th>Fecha de vencimiento</th>
                    <th>Modificar</th>
                    <th>Eliminar</th>
                </thead>    
                <tbody>
                    {products.map((item, index) =>
                    <tr key={item.id}  >
                        <td>{item.productName}</td>  
                        <td>{item.amount}</td>          
                        <td>usd {item.price}</td>  
                        <td>{item.elaborationDate}</td>  
                        <td>{item.expirationDate}</td>  
                        <td>
                            <Button onClick={()=>modifyDataFormHandler(index)}>Modificar</Button>
                        </td>  
                        <td>
                            <Button onClick={()=>deleteRowProductHandler(item.id)} variant='danger'>Eliminar</Button>
                        </td>
                    </tr>
                    )}
                </tbody>
                </TableProducts>
            </div>
        </>
    )
}

export default Tabla;