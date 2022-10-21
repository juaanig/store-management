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

    return (
        <AuthContext.Provider value={{setInfoHandler,user}}>
            {children}
        </AuthContext.Provider>
    )
}

export {AuthProvider};
export default AuthContext;