import  TableProducts from 'react-bootstrap/Table';
import {Button} from 'react-bootstrap'

import { useContext } from 'react';
import ThemeContext from '../../contexts/ThemeContext/ThemeContext';
import {useProduct} from '../../hooks/hookProduct/useProduct'; 
import AuthContext from '../../contexts/authContext/AuthContext';
import ProductContext from '../../contexts/productsContext/ProductContext';
import RequestProducts from '../../contexts/requestsContext/requestProdContext';

const Tabla = () => {
    
    const {products} = useContext(RequestProducts); 
    const {user} = useContext(AuthContext)
    const {theme} = useContext(ThemeContext)
    const {setModifyButton, setLoadButton, setShowForm, setClean, setModifyProduct} = useContext(ProductContext)
    const { deleteProductHandler} = useProduct() ;
    
    const deleteRowProductHandler = (id) => {
        deleteProductHandler(id)
    }
    
    const modifyDataFormHandler = (id) => {
        setShowForm(true)
        setClean(false)
        setModifyButton(true)
        setLoadButton(false)
        const obj = products.find(product => product.id === id)
        setModifyProduct(obj)  
    }
    
    return (
        <>
            <div className='container section' breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}  minBreakpoint="xxs" bordered >
                <TableProducts striped hover variant={theme} className='text-center'>
                    <thead >
                        <th>Nombre</th>
                        <th>Cantidad</th>
                        <th>Precio</th>
                        <th>Fecha de ingreso</th>
                        <th>Fecha de vencimiento</th>
                        {   user.role === 'Deposito' &&
                            <>
                                <th>Modificar</th>
                                <th>Eliminar</th>
                            </>
                        }
                    </thead>    
                    <tbody>
                        {products.map((item) =>
                        <tr key={item.id}  >
                            <td>{item.productName}</td>  
                            <td>{item.amount}</td>          
                            <td>usd {item.price}</td>  
                            <td>{item.elaborationDate}</td>  
                            <td>{item.expirationDate}</td>
                            {   user.role === 'Deposito' &&
                                <>
                                    <td>
                                        <Button onClick={()=>modifyDataFormHandler(item.id)}>Modificar</Button>
                                    </td>  
                                    <td>
                                        <Button onClick={()=>deleteRowProductHandler(item.id)} variant='danger'>Eliminar</Button>
                                    </td>
                                </>
                            }
                        </tr>
                        )}
                    </tbody>
                            
                </TableProducts>
            </div>
        </>
    )
}

export default Tabla;