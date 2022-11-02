import Table from '../../components/Table/Table';
import FormProducts from '../../components/FormProducts/FormProducts';
import Notes from '../../components/Notes/Notes';
import Loader from '../../components/Loader/Loader';
import { ProductProvider } from '../../contexts/productsContext/ProductContext';
import AuthContext from '../../contexts/authContext/AuthContext';
import { useContext } from 'react';

const Section = () => {

  const {showLoader, user} = useContext(AuthContext)
    
  return (
    <>
      <ProductProvider>
        <div className='row mt-4 m-1 '>
          <div className='col '>
            <Notes/>
          </div>
          <div className='col-7'>
            <Table/>
          </div>
          {user.role !== 'Comprador' ?
          <div className='col'>
            <FormProducts/>
            {showLoader && <Loader />}
          </div>
          : null}
        </div>
      </ProductProvider>
    </>
  )
}

export default Section;