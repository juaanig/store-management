import React from 'react'
import { useState, useEffect } from "react";
import {useProduct} from '../../hooks/hookProduct/useProduct'
import { useNotes } from '../../hooks/hookNotes/useNotes';
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

const FormProductSell = () => {

    const {getListProducts} = useProduct();
    const {sellNoteHandler} = useNotes();
    const [products,setProducts] = useState([]);
    
    useEffect(() => {
        
        const getProducts = async() => {
            const data = await getListProducts();
            setProducts(data)
        }
        console.log("loop")

        getProducts();
        
    },[])
    console.log(products)

    const [productName, setProductName] = useState('');
    const [sellAmount, setSellAmount] = useState('');

    //Captacion de los valores de los inputs
    const productNameHandler = (e) => setProductName((e.target.value));
    const sellAmountHandler = (e) => setSellAmount((e.target.value));


    const sellProductHandler = async () => {

        const product = {
            productName: productName.trim(),
            sellAmount: sellAmount.trim()
        }

        await sellNoteHandler(product)
    }


  return (
    <>
        <div className='container mb-5' >
            <Form>
                <Form.Group className='mb-2'>
                    <Form.Label>Nombre del producto</Form.Label>
                    <Form.Select value={productName} onChange={productNameHandler}>
                        <option value="" >Seleccione un producto</option>
                        {products.map((item) => (
                            <option value={item.productName}>{item.productName}</option>
                        ))}
                    </Form.Select>
                </Form.Group>
                <Form.Group className='mb-2'>
                    <Form.Label>Cantidad a vender:</Form.Label>
                    <Form.Control type="number" min={1} placeholder='Ingrese cantidad a vender' value={sellAmount} onChange={sellAmountHandler}/>
                </Form.Group>
                <Form.Group className='mb-2'>
                    <Button type='button' variant='success' className='add-user me-3' placeholder='Fecha de venta' onClick={sellProductHandler}>Vender Producto</Button>
                </Form.Group>
            </Form>
        </div>
    </>
  )
}

export default FormProductSell