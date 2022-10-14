import { Outlet } from "react-router-dom";

import { useContext } from "react";

import NavLayout from "../GeneralDisplay/Nav/NavLayout";
import Login from "../Login/Login";

import AuthContext from "../../contexts/authContext/authContext";

// Componente que contendra las demas rutas  


const Layout = () => {
    
    const {info} = useContext(AuthContext)

    return (
        <>
            <NavLayout/>
            <main>
                <Outlet/>
            </main>
            {!info.status && <Login/>}
        </>
    )

}


export default Layout