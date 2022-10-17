import { useContext } from "react";
import AuthContext from "../../contexts/authContext/AuthContext";

import "./Buttons.css"

const Buttons = () => {

  const {user} = useContext(AuthContext)
  
  let role = user.role
  
  const roleButtonHandler = (role) => {
    
    switch (role) {
      case "Vendedor":
        return ( <button className="common">Vender</button> );
      case "Comprador":
        return ( <button className="common">Comprar</button> );
      case "Deposito":
        return (<button className="common">Cargar</button>);
      default:
        return (<h2>Que haces acá master?</h2>);
    }
  }

  return (
    <div className='buttons-section'>
        <div className="buttons-styles">
          {roleButtonHandler(role)}
        </div>
    </div>
  )
}

export default Buttons