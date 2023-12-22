import deafultAxios from "axios"

const axios = () => deafultAxios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
    headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
    }
})
export default axios

/*
Se define una función anónima (arrow function) llamada axios 
que devuelve una instancia personalizada de Axios creada 
mediante el método create() de deafultAxios.

baseURL: Se establece como 
import.meta.env.VITE_BASE_URL. import.meta.env 
proporciona acceso a las variables de entorno específicas del 
entorno de ejecución, y VITE_BASE_URL parece ser una variable 
de entorno que almacena la URL base para las solicitudes HTTP.

headers: Se configura con un objeto que contiene la autorización 
mediante un token Bearer. Parece que intenta obtener el token de 
autorización de localStorage.getItem

*/