import axios from "axios"
import { useDispatch } from "react-redux"
import { setCredentialsSlice } from "../store/slices/credentials.slice"  //! Modificar la ruta
import { useNavigate } from "react-router-dom"

const useAuth = () => {
    const baseUrl = "https://ecommercebackendbyrick.onrender.com" //! Modificar la baseUrl
    const dispatch = useDispatch()
    const navigate = useNavigate()
    
    const loginUser = (data) => {
        const url = `${baseUrl}/users/login` //! Modificar la ruta
        axios.post(url, data)
            .then(response => {
                const token = response.data.token  
                const username = response.data.username //! Modificar la instancia
                const email = response.data.email  //! Modificar la instancia
                localStorage.setItem("token", response.data.token)
                localStorage.setItem("userName", response.data.name)  //! Modificar la instancia
                localStorage.setItem("email", response.data.email) //! Modificar la instancia
                const obj = {token, username, email} //! Modificar la instancia
                dispatch(setCredentialsSlice(obj))
                navigate("/")
                console.log(response.data) })
            .catch(error => {
                dispatch(setCredentialsSlice(null))
                localStorage.removeItem("token")
                localStorage.removeItem("username")
                localStorage.removeItem("email")
                console.log(error)
            })
    }
    const registerUser = (data) => {
        const url = `${baseUrl}/users`  //! Modificar la ruta
        axios.post(url, data)
        .then(response => console.log(response.data) )
        .catch(error => console.log(error))
    }
    return {loginUser, registerUser} //? Retorno un objeto para que no se modifique los nombres a diferencia de un array que se pueden modificar los nombres cuando se reciban
}

export default useAuth
