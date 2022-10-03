import "./Buttons.css"

const Buttons = () => {

  const role = "vendedor";

  const roleButtonHandler = (role) => {
    switch (role) {
      case "vendedor":
        return ( <button className="common">Vender</button> );
      case "comprador":
        return ( <button className="common">Comprar</button> );
      case "deposito":
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