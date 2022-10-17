import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../contexts/authContext/AuthContext";

const LogoutButton = () => {

    const {setInfoHandler} = useContext(AuthContext);
    const navigate = useNavigate()
    
    const logOutHandler = () => {
        localStorage.removeItem("USER")
        setInfoHandler(false)
        console.log("en logOut",localStorage.getItem("USER"))
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