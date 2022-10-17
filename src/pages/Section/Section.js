

import Table from '../../components/Table/Table';
import Dashboard from '../../components/Dashboard&Buttons/Dashboard';
import FormProducts from '../../components/FormProducts/FormProducts';
import Buttons from '../../components/Buttons/Buttons';

const products = [
  {
    id:1,
    nombre:"HONDA cbr 1000 ",
    cantidad: 2,
    fi: "13/09/2022",
    fv:0,
    price: 42500
  },
  {
    id:2,
    nombre:"BMW s1000rr ",
    cantidad: 3,
    fi: "13/09/2022",
    fv:0,
    price: 55000
  },
  {
    id:3,
    nombre:"Kawasaki H2r",
    cantidad:1,
    fi:"13/09/2022",
    fv:0,
    price: 90000
  },
  {
    id:4,
    nombre:"Yamaha r1 ",
    cantidad:5,
    fi:"13/09/2022",
    fv:0,
    price: 57900
  },
  {
    id:5,
    nombre:"Suzuki gsx1000r",
    cantidad:6,
    fi:"20/09/2022",
    fv:0,
    price: 61300
  }
]



const Section = () => {
    
    return (
      <>
        <div className='row mt-4 m-1'>
          <div className='col'>
            <Dashboard/>
          </div>
          <div className='col-7'>
            <Table products={products}/>
          </div>
          <div className='col'>
            <Buttons/>
            <FormProducts/>
          </div>
        </div>
      </>
    )
}

export default Section;