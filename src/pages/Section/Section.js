import Table from '../../components/Table/Table';
import FormProducts from '../../components/FormProducts/FormProducts';
import Notes from '../../components/Notes/Notes';
import { ProductProvider } from '../../contexts/productsContext/ProductContext';

const Section = () => {
    
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
          <div className='col'>
            <FormProducts/>
          </div>
        </div>
      </ProductProvider>
    </>
  )
}

export default Section;