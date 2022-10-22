import React from 'react'
import { Form, InputGroup, Button } from 'react-bootstrap';

const FormUsers = ({showForm, showFormHandler, errors, visiblePassword, showPasswordHandler, icon, submitButton, submitUserHandler, editButton, editUserHandler, user, nameHandler, lastNameHandler, emailHandler, roleHandler, passwordHandler}) => {
  return (
    <div className='container mb-5' breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}  minBreakpoint="xxs">
                <div className='container mt-3 mb-3'>
                    { showForm ? <Button onClick={showFormHandler} variant='danger'>cancelar</Button> : <Button className='' onClick={showFormHandler} >Nuevo operario</Button>}
                </div>
                { showForm &&
                    <Form>
                        <Form.Group className='mb-2'>
                            <Form.Control type="text" value={user.name} placeholder='Nombre del operario'  onChange={nameHandler}/>
                            {errors.name && <p className="text-danger" >{errors.name}</p>}
                        </Form.Group>
                        <Form.Group className='mb-2'>
                            <Form.Control type="text" value={user.lastName} placeholder='Apellido'  onChange={lastNameHandler}/>
                            {errors.lastName && <p className="text-danger">{errors.lastName}</p>}
                        </Form.Group>
                        <Form.Group className='mb-2'>
                            <Form.Control type="text" value={user.email} placeholder='e-mail'  onChange={emailHandler}/>
                            {errors.email && <p className="text-danger">{errors.email}</p>} 
                            {errors.user && <p className="text-danger">{errors.user}</p>}
                        </Form.Group>
                        <Form.Group className='mb-2'>
                            <InputGroup>
                                <Form.Control type={visiblePassword} placeholder="Ingrese contraseña" onChange={passwordHandler} value={user.password}/>
                                <Button variant="outline-secondary" className='bg-light' onClick={showPasswordHandler}><img src={process.env.PUBLIC_URL+icon} alt={"EyeImage"} style={{ width: "20px" }}></img></Button>
                            </InputGroup>
                            {errors.pass && <p className="text-danger">{errors.pass}</p>}
                        </Form.Group>
                        <Form.Group className='mb-3'>
                            <Form.Select value={user.role}  onChange={roleHandler} >
                                <option value="" >Seleccione un rol</option>
                                <option value="Vendedor">Vendedor</option>
                                <option value="Comprador">Comprador</option>
                                <option value="Deposito">Deposito</option>
                            </Form.Select>
                            {errors.role && <p className="text-danger">{errors.role}</p>} 
                        </Form.Group>
                        <Form.Group>
                            { submitButton && <Button type='button' variant='success' className='add-user me-3' onClick={submitUserHandler}>Agregar operario</Button>}
                            { editButton && <Button type='button' variant='warning' className='add-user' onClick={editUserHandler}>Editar operario</Button>}
                        </Form.Group>
                    </Form>
                }  
            </div>
  )
}

export default FormUsers