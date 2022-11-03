import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../contexts/authContext/AuthContext";

const LogoutButton = () => {

    const {setInfoHandler} = useContext(AuthContext);
    const navigate = useNavigate()
    
    const logOutHandler = () => {
        localStorage.removeItem("USER")
        setInfoHandler(null)
        console.log("en logOut",localStorage.getItem("USER"))
        navigate("/login")
    }

    return (
        <button className="btn btn-danger" xs={8}
            onClick={logOutHandler}>
            Cerrar sessión
        </button>
    )
}

export default LogoutButton;