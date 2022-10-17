import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../contexts/authContext/authContext";

const LogoutButton = () => {

    const {setInfoHandler} = useContext(AuthContext);
    const navigate = useNavigate()
    
    const logOutHandler = () => {
        setInfoHandler(false)
        window.localStorage.removeItem("USER")
        navigate("/")
    }

    return (
        <button
            onClick={logOutHandler}>
            Cerrar sessión
        </button>
    )
}

export default LogoutButton;