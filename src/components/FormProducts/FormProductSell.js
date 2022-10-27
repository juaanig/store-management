import React from 'react'
import { useContext, useState, useEffect } from "react";
import AuthContext from "../../contexts/authContext/AuthContext";
import {useProduct} from '../../hooks/hookProduct/useProduct'
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

import { collection, addDoc,doc, deleteDoc, updateDoc} from 'firebase/firestore' ;
import { db } from '../../firebaseConfig/firebase' ;

const FormProductSell = () => {

    const {getListProducts} = useProduct();
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
    const [sellDate, setSellDate] = useState('');

    const {user} = useContext(AuthContext)

    const notesCollection = collection(db, "notes");

    //Captacion de los valores de los inputs
    const productNameHandler = (e) => setProductName((e.target.value));
    const sellAmountHandler = (e) => setSellAmount((e.target.value));
    const sellDateHandler = (e) => setSellDate((e.target.value));


    const sellProductHandler = async () => {
        //const product = products.find(product => product.name === productName);
        const actualtime = new Date();
        const actualtimeSort = actualtime.toISOString();
        const actualtimeNotes = actualtime.toLocaleString();
        
        const sellNote= `${actualtimeNotes}: ${user.name} ${user.lastName} vendió ${sellAmount} unidades de ${productName}.`
        
        const note = {note: sellNote, date: actualtimeSort};
        
        await addDoc(notesCollection,note)
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
                <Form.Group className='mb-3'>
                    <Form.Label>Fecha de venta:</Form.Label>
                    <Form.Control type="date" value={sellDate} onChange={sellDateHandler}/>
                </Form.Group>
                <Form.Group>
                    <Button type='button' variant='success' className='add-user me-3' placeholder='Fecha de venta' onClick={sellProductHandler}>Vender Producto</Button>
                </Form.Group>
            </Form>
        </div>
    </>
  )
}

export default FormProductSell