import Table from '../../components/Table/Table';
import FormProducts from '../../components/FormProducts/FormProducts';
import Notes from '../../components/Notes/Notes';
import Loader from '../../components/Loader/Loader';
import { ProductProvider } from '../../contexts/productsContext/ProductContext';
import AuthContext from '../../contexts/authContext/AuthContext';
import { useContext,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Section = () => {

  const {showLoader, user} = useContext(AuthContext)
  const navigate = useNavigate()
  
  useEffect(()=>{
  
    const getUser = async() =>{

      let user1 = await user 

      if(user1 === null || Object.keys(user1).length === 0 ) navigate("/login") ;
      
    }  
    getUser()


  },[user,navigate])

  return (
    <>
      <ProductProvider>
        <div className='row mt-4 m-1 '>
          <div className='col-3'>
            <Notes/>
          </div>
          <div className='col-7'>
            <Table/>
          </div>
          {user.role !== 'Comprador' &&
          <div className='col-2'>
            <FormProducts/>
            {showLoader && <Loader />}
          </div>
          }
        </div>
      </ProductProvider>
    </>
  )
}

export default Section;