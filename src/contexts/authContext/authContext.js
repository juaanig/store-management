import { useState,createContext } from "react";

const AuthContext = createContext();

const AuthProvider = ({children}) => {

    const [info,setInfo] = useState("hola")
    console.log("info en auth context : ",info)

    const setInfoHandler = (arg) => {
       setInfo(arg)
    }

    return (
        <AuthContext.Provider value={{info,setInfoHandler}}>
            {children}
        </AuthContext.Provider>
    )
}

export {AuthProvider};
export default AuthContext;