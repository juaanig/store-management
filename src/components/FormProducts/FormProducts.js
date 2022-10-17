import React from 'react'

import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

const FormProducts = () => {

    return (
        <>
        <div className='container mb-5' breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}  minBreakpoint="xxs">
            <hr></hr>
            <Form>
                <Form.Group className='mb-2'>
                    <Form.Control type="text" placeholder='Nombre del producto' />
                </Form.Group>
                <Form.Group className='mb-2'>
                    <Form.Control type="number" placeholder='Precio' />
                </Form.Group>
                <Form.Group className='mb-2'>
                    <Form.Control type="number" placeholder='Cantidad' />
                </Form.Group>
                <Form.Group className='mb-3'>
                    <Form.Control type="date"/>
                </Form.Group>
                <Form.Group className='mb-3'>
                    <Form.Control type="date"/>
                </Form.Group>
                <Form.Group>
                    <Button type='button' variant='success' className='add-user me-3'>Agregar Producto</Button>
                </Form.Group>
            </Form>
        </div>
        </>
    )

}

export default FormProducts