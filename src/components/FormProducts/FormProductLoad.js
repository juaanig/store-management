import { useState,useContext, useEffect } from "react";
import { useProduct } from '../../hooks/hookProduct/useProduct';
import ProductContext from '../../contexts/productsContext/ProductContext';

import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import AuthContext from "../../contexts/authContext/AuthContext";

const FormProductLoad = () => {

    const {setUpdateProducts} = useContext(ProductContext)
    const {setShowLoader} = useContext(AuthContext)

    const [productName, setProductName] = useState('');
    const [price, setPrice] = useState('');
    const [amount, setAmount] = useState('');
    const [elaborationDate, setElaborationDate] = useState('');
    const [expirationDate, setExpirationDate] = useState('');
    const [expiration, setExpiration] = useState(false);
    const [id, setId] = useState('');
    const [errors,setErrors] = useState('');

    const {loadProduct,validateLoadFormProduct, modifyProductHandler} = useProduct();
    const {modifyProduct, modifyButton, loadButton, setModifyButton, setLoadButton, clean} = useContext(ProductContext)

    //Funcion para limpiar los imputs del formulario
    const cleanInputs = () => {
        setProductName('');
        setPrice('');
        setAmount('');
        setElaborationDate('');
        setExpirationDate('');
    }

    // Handlers para captar todos los valores del los input
    const nameHandler = (e) => setProductName((e.target.value));  
    const priceHandler = (e) => setPrice((e.target.value)); 
    const amountHandler = (e) => setAmount((e.target.value)); 
    const elaborationDateHandler = (e) => setElaborationDate((e.target.value));
    const expirationDateHandler = (e) => setExpirationDate((e.target.value));
    const expirationHandler = (e) => setExpiration((e.target.checked));
    
    //Funcion setear producto
    const setProductValidated = () => {
        const product = {
            productName: productName.trim(),
            price: price.trim(),
            amount: amount,
            elaborationDate: elaborationDate.trim(),
            expiration: expiration, 
            expirationDate: expiration ? expirationDate.trim() : ''
        }

        let validate = validateLoadFormProduct(product)
        setErrors(validate)
        if(Object.entries(validate).length === 0){
            return product;
        }else {
            setShowLoader(false)
            return false;
        }
    }
    
    //Funcion para agregar un producto a la base de datos
    const submitButtonHandler = () => {
        setShowLoader(true)
        const validatedProduct = setProductValidated();
        
        if(validatedProduct !== false){
            loadProduct(validatedProduct)
            cleanInputs();
            setUpdateProducts(true);
            setShowLoader(false)
        }
        
    }
    //=========================================================================================================================================================================
    //Effect producto modificado desde el form NO FUNCIONAAAAAAAAAAAAAAAAAAA
    useEffect(()=>{ 
        const modifyInputs = () =>{
            setProductName(modifyProduct.productName)
            setPrice(modifyProduct.price)
            setAmount(modifyProduct.amount)
            setElaborationDate(modifyProduct.elaborationDate)
            setExpiration(modifyProduct.expiration)
            setExpirationDate(modifyProduct.expirationDate)
            setId(modifyProduct.id)
        }
        if(clean){
            cleanInputs()
            setModifyButton(false)
            setLoadButton(true)
        }else {
            modifyInputs()
        }
    },[modifyProduct, clean])

    //Funcion para modificar producto en la base de datos ESTE SERIA LA FUNCION DEL BOTON QUE SE RENDERIZARIA AL TOCAR EL MODIFICAR
    const modifyButtonHandler = () => {
        setShowLoader(true)
        const validatedProduct = setProductValidated();

        if(validatedProduct !== false){
            modifyProductHandler({...validatedProduct,id:id})
            cleanInputs();
            setUpdateProducts(true);
            setModifyButton(false)
            setLoadButton(true)
            setShowLoader(false)
        }
    }
    //=========================================================================================================================================================================

    return (
    <>
        <div className='container mb-5' >
            <Form>
                <Form.Group className='mb-2'>
                    <Form.Label>Nombre del producto</Form.Label>
                    <Form.Control type="text" placeholder='Nombre del producto' onChange={nameHandler} value={productName}/>
                    {errors.productName && <p className="text-danger">{errors.productName}</p>}
                </Form.Group>
                <Form.Group className='mb-2'>
                    <Form.Label>Precio</Form.Label>
                    <Form.Control type="number" placeholder='Precio' onChange={priceHandler} value={price}/>
                    {errors.price && <p className="text-danger">{errors.price}</p>}
                </Form.Group>
                <Form.Group className='mb-2'>
                    <Form.Label>Cantidad</Form.Label>
                    <Form.Control type="number" placeholder='Cantidad' onChange={amountHandler} value={amount}/>
                    {errors.amount && <p className="text-danger">{errors.amount}</p>}
                </Form.Group>
                <Form.Group className='mb-3'>
                    <Form.Label>Fecha de ingreso o elaboración</Form.Label>
                    <Form.Control type="date" onChange={elaborationDateHandler} value={elaborationDate}/>
                    {errors.elabDate && <p className="text-danger">{errors.elabDate}</p>}
                </Form.Group>
                <Form.Group className='mb-3'>
                    { expiration && 
                        <>
                            <Form.Label>Fecha de vencimiento</Form.Label>
                            <Form.Control type="date" onChange={expirationDateHandler} value={expirationDate}/>
                        </>
                    }
                    <Form.Label>¿contiene vencimiento?</Form.Label>
                    <input type="checkbox" className="m-2" onChange={expirationHandler} value={expirationDate}/>
                    {errors.expDate && <p className="text-danger">{errors.expDate}</p>}
                </Form.Group>
                <Form.Group>
                    {loadButton && <Button type='button' variant='success' className='add-user me-3' onClick={submitButtonHandler}>Agregar Producto</Button>}
                    {modifyButton && <Button type='button' variant='warning' className='add-user me-3' onClick={modifyButtonHandler}>Modificar Producto</Button>}
                </Form.Group>
            </Form>
        </div>
    </>
    )
}

export default FormProductLoad