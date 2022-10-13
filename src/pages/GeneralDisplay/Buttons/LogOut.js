import { useContext } from "react";
import AuthContext from "../../../contexts/authContext/authContext";
import Constants from "../../../utils/Constants"
//import AuthDispatchContext from "../context/AuthDispatchContext";

const LogoutButton = () => {
    const setCurrentUser = useContext(AuthContext);
    return (
        <button
            onClick={() => {
                setCurrentUser(null);
                window.localStorage.removeItem(Constants.CURRENT_USER_STORAGE_KEY); 
            }}
        >
            Cerrar sessión
        </button>
    )
}

export default LogoutButton;