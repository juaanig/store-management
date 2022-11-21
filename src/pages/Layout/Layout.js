import { Outlet } from "react-router-dom";

import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { RequestProductsProvider } from "../../contexts/requestsContext/requestProdContext";

import NavLayout from "../../components/Nav/NavLayout";

import AuthContext from "../../contexts/authContext/AuthContext";
import ThemeContext from "../../contexts/ThemeContext/ThemeContext";
import Footer from "../../components/Footer/Footer";

const Layout = () => {


    const {user} = useContext(AuthContext)
    const {theme} = useContext(ThemeContext)
    const navigate = useNavigate()

    
    useEffect(()=>{
        
        const getRole = async() =>{
            let user1 = await user 

            if((user1) === null ||  Object.keys(user1).length === 0 ){
                navigate("/login")
            }else {
                (user1).role === "admin" ? navigate("/superUser") : navigate("/general");
            }
        }  
        getRole()
 

    },[user,navigate])

    return (
        <>
            <RequestProductsProvider>
                <div className={'positions body-'+theme}>
                    <NavLayout/>
                    <main className="addUsers mt-3 mb-5">
                        <Outlet/>
                    </main>
                    <Footer/>
                </div>
            </RequestProductsProvider>
        </>
    )

}


export default Layout