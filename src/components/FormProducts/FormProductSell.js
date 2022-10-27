import React from 'react'
import { useContext, useState } from "react";
import AuthContext from "../../contexts/authContext/AuthContext";
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

import { collection, addDoc,doc, deleteDoc, updateDoc} from 'firebase/firestore' ;
import { db } from '../../firebaseConfig/firebase' ;

const FormProductSell = () => {
    const products = [
        {
            name:"HONDA cbr 1000 ",
            price:"u$d 10000",
            amount: 100,
            elaborationDate:"2021-01-01",
            expirationDate:"2050-01-01",
        }
    ]

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
                        {products.map((product) => (
                            <option value={product.name}>{product.name}</option>
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