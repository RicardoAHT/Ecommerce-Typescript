import axios from "axios"
import { useDispatch } from "react-redux"
import { setCredentialsSlice } from "../store/slices/credentials.slice"  //! Modificar la ruta
import { useNavigate } from "react-router-dom"

const useAuth = () => {
    const baseUrl = "https://ecommercebackendbyrick.onrender.com" //! Modificar la baseUrl
    const dispatch = useDispatch()
    const navigate = useNavigate()
    
    const loginUser = (data: object | []) => {
        const url = `${baseUrl}/users/login` //! Accedo a la ruta indicada
        axios.post(url, data)
            .then(response => {
                const token = response.data.token  
                const name = response.data.user.firstName 
                const email = response.data.user.email  
                localStorage.setItem("token", response.data.token) //! El primer parametro es el nombre que le vamos a dar en el local storage y el segundo es el valor
                localStorage.setItem("name", response.data.user.firstName)  
                localStorage.setItem("email", response.data.user.email) 
                const obj = {token, name, email}
                // @ts-ignore
                dispatch(setCredentialsSlice(obj)) //! Guardo la informacion en un estado global
                navigate("/")
            })
            .catch(error => {
                // @ts-ignore
                dispatch(setCredentialsSlice(null)) //! Le paso null al estado global en caso de credenciales incorrectas
                //! Reseteo los elementos guardados en el local storage
                localStorage.removeItem("token")
                localStorage.removeItem("username")
                localStorage.removeItem("email")
                console.log(error)
            })
    }
    const registerUser = (data: object | []) => {
        const url = `${baseUrl}/users`  //! Accedo a la ruta indicada
        axios.post(url, data)
        .then(response => console.log(response.data) )
        .catch(error => console.log(error))
    }
    return {loginUser, registerUser} //! Retorno un objeto para que no se modifique los nombres a diferencia de un array que se pueden modificar los nombres cuando se reciban
}

export default useAuth
