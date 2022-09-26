import { Outlet } from "react-router-dom";
import Nav from "../GeneralDisplay/Nav/Nav";



// Componente que contendra las demas rutas  

const Layout = () => {
  
    return (
        <>
            <Nav/>
            <main>
                <Outlet/>
            </main>
        </>
    )

}


export default Layout