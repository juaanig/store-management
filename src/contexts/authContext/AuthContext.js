import { useState,createContext, useEffect } from "react";

const AuthContext = createContext();

const AuthProvider = ({children}) => {

    const [user,setUser] = useState(null)

    useEffect(()=>{
        const userData = localStorage.getItem("USER")
        setUser(userData)
    },[])

    const setInfoHandler = (arg) => {
       setUser(arg)
    }

    const [visiblePassword, setVisiblePassword] = useState("password");
    const [icon, setIcon] = useState("img/normaleye.png");

    const showPasswordHandler = () => {
        let aux = visiblePassword === "password" ? "text" : "password";
        let auxIcon = icon === "img/normaleye.png" ? "img/slasheye.png" : "img/normaleye.png";
        setVisiblePassword(aux);
        setIcon(auxIcon);
    }

    return (
        <AuthContext.Provider value={{setInfoHandler,user, showPasswordHandler, visiblePassword, icon}}>
            {children}
        </AuthContext.Provider>
    )
}

export {AuthProvider};
export default AuthContext;
