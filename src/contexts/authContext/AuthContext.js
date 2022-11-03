import { useState,createContext, useEffect } from "react";

const AuthContext = createContext();

const AuthProvider = ({children}) => {

    const [user,setUser] = useState({role:""})

    useEffect(()=>{
        const userData = JSON.parse(localStorage.getItem("USER"))
        setUser(userData)
    },[])

    const setInfoHandler = (arg) => {
       setUser(arg)
    }

    const [icon,setIcon] = useState("img/normaleye.png")
    const [visiblePassword,setVisiblePassword] = useState("password")

    const showPasswordHandler = () => {
        if(icon === "img/normaleye.png"){
            setIcon("img/slasheye.png")
            setVisiblePassword("text")
        }else{
            setIcon("img/normaleye.png")
            setVisiblePassword("password")
        }
    }

    const [showLoader,setShowLoader] = useState(false)

    return (
        <AuthContext.Provider value={{setInfoHandler,user, visiblePassword,icon, showPasswordHandler, showLoader, setShowLoader}}>
            {children}
        </AuthContext.Provider>
    )
}

export {AuthProvider};
export default AuthContext;