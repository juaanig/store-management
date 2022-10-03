import "./Buttons.css"

const Buttons = () => {

  const role = "deposito, comprador, vendedor";

  return (
    <div className='buttons-section'>
        <div className="buttons-styles">
            <button className="common sell">Vender</button>
            <button className="common buy">Comprar</button>
            <button className="common add">Cargar</button>
        </div>
    </div>
  )
}

export default Buttons