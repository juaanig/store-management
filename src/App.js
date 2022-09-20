import Tabla from './pages/GeneralDisplay/Tabla/Tabla';
import './App.css';

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
    id:3,
    nombre:"Yamaha r1 ",
    cantidad:5,
    fi:"13/09/2022",
    fv:0,
    price: 57900
  }
]


const App = () => {

  return (
    <>
      <nav className='nav-app'>
        <h1>STORE MANAGMENT</h1>
        <button className='nav-login'>LOG-IN</button>
      </nav>
      <div className='container'>
        <table>
          <tbody>
            <tr>
            {products.map((item) => <Tabla 
              key={item.id}
              nombre={item.nombre}
              cantidad={item.cantidad}
              fi={item.fi} 
              fv={item.fv} 
              price={item.price}
              /> ) 
            }
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );

}

export default App;
