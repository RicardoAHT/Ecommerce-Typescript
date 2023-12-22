import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { showNotification } from "../store/app.slice";

const useValidateLogin = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const validateLogin = (errorMessage) => {

        const token = localStorage.getItem("token")
        if(!token) {
            navigate("/login")
            if(errorMessage){
                dispatch(showNotification({
                    variant: "danger",
                    message: errorMessage
                }))
            }
            return false
        }
        return true
    }
    const logout = () => {
        localStorage.setItem("token", "")
        navigate("/login")
    }
    return { validateLogin, logout}
}

export default useValidateLogin


