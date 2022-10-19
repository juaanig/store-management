import { Outlet } from "react-router-dom";

import { useContext } from "react";

import NavLayout from "../../components/Nav/NavLayout";
import Login from "../../components/Login/Login";

import AuthContext from "../../contexts/authContext/AuthContext";
import ThemeContext from "../../contexts/ThemeContext/ThemeContext";
import Footer from "../../components/Footer/Footer";

// Componente que contendra las demas rutas  


const Layout = () => {

    const {user} = useContext(AuthContext)
    const {theme} = useContext(ThemeContext)

    return (
        <>
            <NavLayout/>
            <main>
                {user ? <Outlet/> : <Login/>}
            </main>
            <Footer/>
        </>
    )

}


export default Layout