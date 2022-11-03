import { Outlet } from "react-router-dom";

import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import NavLayout from "../../components/Nav/NavLayout";
import Login from "../../components/Login/Login";

import AuthContext from "../../contexts/authContext/AuthContext";
import ThemeContext from "../../contexts/ThemeContext/ThemeContext";
import Footer from "../../components/Footer/Footer";

const Layout = () => {

    const {user} = useContext(AuthContext)
    const {theme} = useContext(ThemeContext)
    const navigate = useNavigate()

    useEffect(()=>{

        try{
            const getRole = async() =>  (await user).role === "admin" ? navigate("/superUser") : navigate("/general");
            getRole()
        }catch(e){
            console.log(e)
        }

    },[user,navigate])

    return (
        <>
            <div className={'positions body-'+theme}>
                <NavLayout/>
                <main className="addUsers mt-3 mb-5">
                    {user ? <Outlet/> : <Login/>}
                </main>
                <Footer/>
            </div>
        </>
    )

}


export default Layout