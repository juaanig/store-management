import React from 'react'
import { useContext, useState } from "react";

import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

import { db } from '../../firebaseConfig/firebase' ;
import { collection, addDoc,doc, deleteDoc, updateDoc} from 'firebase/firestore' ;

const FormProductLoad = () => {

    const [productName, setProductName] = useState('');
    const [price, setPrice] = useState('');
    const [amount, setAmount] = useState('');
    const [elaborationDate, setElaborationDate] = useState('');
    const [expirationDate, setExpirationDate] = useState('');

    const productsCollection = collection(db, "products");

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

    //Funcion para crear un objeto del producto
    const setProduct = () => {
        const product = {
            productName: productName.trim(),
            price: "u$d "+ price.trim(),
            amount: amount.trim(),
            elaborationDate: elaborationDate.trim(),
            expirationDate: expirationDate.trim(), 
        }
        return product;
    }

    //Funcion para agregar un producto a la base de datos
    const submitButton = async () => {
        await addDoc(productsCollection,setProduct())
        cleanInputs();
    }

  return (
    <>
        <div className='container mb-5' >
            <Form>
                <Form.Group className='mb-2'>
                    <Form.Control type="text" placeholder='Nombre del producto' onChange={nameHandler} value={productName}/>
                </Form.Group>
                <Form.Group className='mb-2'>
                    <Form.Control type="number" placeholder='Precio' onChange={priceHandler} value={price}/>
                </Form.Group>
                <Form.Group className='mb-2'>
                    <Form.Control type="number" placeholder='Cantidad' onChange={amountHandler} value={amount}/>
                </Form.Group>
                <Form.Group className='mb-3'>
                    <Form.Control type="date" onChange={elaborationDateHandler} value={elaborationDate}/>
                </Form.Group>
                <Form.Group className='mb-3'>
                    <Form.Control type="date" onChange={expirationDateHandler} value={expirationDate}/>
                </Form.Group>
                <Form.Group>
                    <Button type='button' variant='success' className='add-user me-3' onClick={submitButton}>Agregar Producto</Button>
                </Form.Group>
            </Form>
        </div>
    </>
  )
}

export default FormProductLoad