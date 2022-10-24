import React from 'react'
import {Button} from 'react-bootstrap'
import TableUser from 'react-bootstrap/Table';

const UserTable = ({modifyDataFormHandler, deleteRowUserHandler, users, theme, tBody}) => {
  return (
    <>
        <div className={'container'} breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}  minBreakpoint="xxs">
            <TableUser striped variant={theme} className="text-center">
                <th>Nombre</th>
                <th>Apellido</th>
                <th>Email</th>
                <th>Rol</th>
                <th>Modificar</th>
                <th>Eliminar</th>
                <tbody ref={tBody} className="mt-3">
                {users.map((item,index) =>
                {return( 
                    item.role === 'admin' 
                    ? null 
                    : <tr key={index}>
                        <td >{item.name}</td>  
                        <td>{item.lastName}</td>          
                        <td>{item.email}</td>  
                        <td>{item.role}</td>  
                        <td>
                            <Button onClick={()=>modifyDataFormHandler(index)}>Modificar</Button>
                        </td>  
                        <td>
                            <Button onClick={()=>deleteRowUserHandler(item.id)} variant='danger'>Eliminar</Button>
                        </td> 
                    </tr>)
                })
                }   
                </tbody>
            </TableUser>
            </div>
        
    </>
  )
}

export default UserTable