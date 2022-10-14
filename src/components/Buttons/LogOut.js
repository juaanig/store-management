import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../contexts/authContext/authContext";
import Constants from "../../utils/Constants"

const LogoutButton = () => {

    const {setInfoHandler} = useContext(AuthContext);
    const navigate = useNavigate()
    
    const logOutHandler = () => {
        setInfoHandler(false)
        navigate("/")
        window.localStorage.removeItem(Constants.CURRENT_USER_STORAGE_KEY); 

    }

    return (
        <button
            onClick={logOutHandler}>
            Cerrar sessión
        </button>
    )
}

export default LogoutButton;