import { Outlet } from "react-router-dom";
import NavLayout from "../GeneralDisplay/Nav/NavLayout";



// Componente que contendra las demas rutas  

const Layout = () => {
  
    return (
        <>
            <NavLayout/>
            <main>
                <Outlet/>
            </main>
        </>
    )

}


export default Layout