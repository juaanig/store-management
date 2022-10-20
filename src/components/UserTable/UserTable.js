import React from 'react'
import {Button} from 'react-bootstrap'

const UserTable = ({modifyDataFormHandler, deleteRowUserHandler, users}) => {
  return (
    <>
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
    </>
  )
}

export default UserTable