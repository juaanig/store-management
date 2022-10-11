import { useState,createContext } from "react";

const authContext = createContext();

const AuthProvider = ({children}) => {

    const [data,setData] = useState({})

    const tools = {
        setData,
        data
    }

    return (
        <authContext.Provider value={tools}>
            {children}
        </authContext.Provider>
    )
}

export {authContext};
export default AuthProvider;