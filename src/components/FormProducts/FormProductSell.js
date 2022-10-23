import React from 'react'

import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

const FormProductSell = () => {
    const products = [
        {
          name:"HONDA cbr 1000 ",
        },
        {
            name:"BMW s1000rr ",
        },
        {
            name:"Kawasaki H2r",
        },
        {
            name:"Yamaha r1 ",
        },
        {
            name:"Suzuki gsx1000r",
        }
      ]
  return (
    <>
        <div className='container mb-5' >
            <Form>
                <Form.Group className='mb-2'>
                    <Form.Label>Nombre del producto</Form.Label>
                    <Form.Select >
                        <option value="" >Seleccione un producto</option>
                        {products.map((product) => (
                            <option value={product.name}>{product.name}</option>
                        ))}
                    </Form.Select>
                </Form.Group>
                <Form.Group className='mb-2'>
                    <Form.Label>Cantidad a vender:</Form.Label>
                    <Form.Control type="number" min={1} placeholder='Ingrese cantidad a vender' />
                </Form.Group>
                <Form.Group className='mb-3'>
                    <Form.Label>Fecha de venta:</Form.Label>
                    <Form.Control type="date"/>
                </Form.Group>
                <Form.Group>
                    <Button type='button' variant='success' className='add-user me-3' placeholder='Fecha de venta'>Vender Producto</Button>
                </Form.Group>
            </Form>
        </div>
    </>
  )
}

export default FormProductSell