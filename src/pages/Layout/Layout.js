import { Outlet } from "react-router-dom";

import { useContext } from "react";

import NavLayout from "../../components/Nav/NavLayout";
import Login from "../../components/Login/Login";

import AuthContext from "../../contexts/authContext/AuthContext";

// Componente que contendra las demas rutas  


const Layout = () => {

    const {user} = useContext(AuthContext)

    return (
        <>
            <NavLayout/>
            <main>
<<<<<<< HEAD
                {user ? <Outlet/> : <Login/>}
            </main>
            
=======
                {info.status ||logUser ? <Outlet/> : <Login/>}
            </main>    
>>>>>>> 3508731 (Password hashed, navbar finish)
        </>
    )

}


export default Layout