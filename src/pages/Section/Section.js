

import Table from '../../components/Table/Table';
import FormProducts from '../../components/FormProducts/FormProducts';
import Buttons from '../../components/Buttons/Buttons';
import Notes from '../../components/Notes/Notes';

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

const note = "nombre y apellido vendió 500 motos de la marca yamaha por un total de $ 2895000 nombre y apellido vendió 500 motos de la marca yamaha por un total de $ 2895000nombre y apellido vendió 500 motos de la marca yamaha por un total de $ 2895000"

const notes =[note,note,note,note,note,note,note,note,note,note]

const Section = () => {
    
    return (
      <>
        <div className='row mt-4 m-1'>
          <div className='col bg-warning rounded-3 section'>
            <Notes notes={notes}/>
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