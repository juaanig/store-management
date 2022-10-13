import { useContext } from "react";
import AuthContext from "../../../contexts/authContext/authContext";
import Constants from "../../../utils/Constants"

const LogoutButton = () => {
    const {info} = useContext(AuthContext);
    return (
        <button
            onClick={() => {
                window.localStorage.removeItem(Constants.CURRENT_USER_STORAGE_KEY); 
            }}
        >
            Cerrar sessión
        </button>
    )
}

export default LogoutButton;