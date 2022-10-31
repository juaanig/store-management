import React from 'react'
import { useState, useEffect, useContext } from "react";
import {useProduct} from '../../hooks/hookProduct/useProduct'
import ProductContext from '../../contexts/productsContext/ProductContext';
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

const FormProductSell = () => {

    const {getListProducts, validateSellFormProduct, sellProduct} = useProduct();
    const [products,setProducts] = useState([]);
    const [errors,setErrors] = useState({});

    const {setUpdate} = useContext(ProductContext)
    
    useEffect(() => {
        
        const getProducts = async() => {
            const data = await getListProducts();
            setProducts(data)
        }
        console.log("loop")

        getProducts();
        
    },[])

    const [productName, setProductName] = useState('');
    const [sellAmount, setSellAmount] = useState('');

    const cleanInputs = () => {
        setProductName('');
        setSellAmount('');
    }

    //Captacion de los valores de los inputs
    const productNameHandler = (e) => setProductName((e.target.value));
    const sellAmountHandler = (e) => setSellAmount((e.target.value));


    const sellProductHandler = async () => {

        const product = {
            productName: productName.trim(),
            sellAmount: sellAmount.trim()
        }

        let validate = await validateSellFormProduct(product)
        setErrors(validate)
        console.log(errors)

        if(Object.entries(validate).length === 0){
            sellProduct(product)
            cleanInputs();
            setUpdate(true);
        }
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
                    {errors.productName && <p className="text-danger">{errors.productName}</p>}
                </Form.Group>
                <Form.Group className='mb-2'>
                    <Form.Label>Cantidad a vender:</Form.Label>
                    <Form.Control type="number" min={1} placeholder='Ingrese cantidad a vender' value={sellAmount} onChange={sellAmountHandler}/>
                    {errors.sellAmount && <p className="text-danger">{errors.sellAmount}</p>}
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