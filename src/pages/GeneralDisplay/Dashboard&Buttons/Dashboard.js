import React from 'react'
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <>
        <div className='container-db-btns'>
            <div className='dashboard'>
                "Aqui pondremos las notificaciones y noticias"
            </div>
            <div className='buttons-functions'>
                <button>vender</button>
                <button>eliminar</button>
                <button>cargar</button>
            </div>
        </div>
    </>
  )
}

export default Dashboard;