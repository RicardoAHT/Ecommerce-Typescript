import axios from "axios";
import { useState } from "react";
import getConfigToken from "../services/getConfigToken";
import { useNavigate } from "react-router-dom";
import { setCartCounterSlice } from "../store/slices/cartCounter.slice";
import { useDispatch } from "react-redux";
import { setCartValueSlice } from "../store/slices/cartValue.slice";

const useFetchCart = () => {

    interface Category {
        id: number;
        name: string;
        updateAt: string;
    }
    interface Image {
        id: number;
        productId: number;
        updateAt: string;
        url: string;
    }
    interface Product {
        brand: string;
        category: Category;
        description: string;
        id: number;
        images: [Image];
        price: string;
        title: string;
        updateAt: string;
    }
    interface User {
        email: string;
        id: number;
        firstName: string;
        lastName: string;
    }
    interface ApiResponse {
        id: number;
        product: Product;
        productId: number;
        quantity: number;
        user: User;
    }

    const [cart, setInfoApi] = useState< ApiResponse[] | undefined>(undefined)
    const [hasError, setHasError] = useState(false)
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const getCart = (path: string) => {
        setLoading(true)
        const url = `https://ecommerce-academlo-backend-5ir7.onrender.com${path}`
        axios.get<ApiResponse[]>(url, getConfigToken())
            .then( res => {
                setInfoApi(res.data)
                setHasError(false)
                const infoQuantity = res.data.map(product => product.quantity) //Creo un arreglo con la cantidades de los elementos actual en la api
                const counter = (productsQuantity: number[]) => { // Creo una funcion  que recibe un arreglo y suma el valor de todos sus elementos
                    let result = 0
                    productsQuantity.map( quantity => result += quantity)
                    return result
                }
                // @ts-ignore
                dispatch(setCartCounterSlice(counter(infoQuantity)))// Sumo todas las cantidades de los elementos del carrito
                const infoValue = res.data.map(product => parseFloat(product.product.price))
                const totalValue = (productsQuantity: number[], productsValues: number[]) => {
                    let result = 0
                    for( let i = 0; i < productsValues.length; i++){
                        let mult = productsQuantity[i] * productsValues[i]
                        result += mult
                    }
                    return result
                }
                 // @ts-ignore
                dispatch(setCartValueSlice(totalValue(infoQuantity, infoValue)))
            })
            .catch( error => {
                setHasError(true)
                console.log(error)
            })
            .finally(() => {
                setLoading(false)
                navigate("/cart")
            })      
    }

    const postApi = (path: string, data:{}) => {
        setLoading(true)
        const url = `https://ecommerce-academlo-backend-5ir7.onrender.com${path}`
        axios.post(url, data, getConfigToken())
            .then(response =>{
                setInfoApi( response.data )
                })
            .catch(error => console.log(error))
            .finally(() => {
                setLoading(false)
            })    
    }

    const deleteApi = (path: string, id: number) =>{
        setLoading(true)
        const url = `https://ecommerce-academlo-backend-5ir7.onrender.com${path}/${id}`
        axios.delete(url, getConfigToken())
            // @ts-ignore
            .then(response => {
                setInfoApi(cart?.filter(product => product.id !== id))
            })
            .catch(error => console.log(error))
            .finally(() => {
                setLoading(false)
            })
    }

    const buyCart = (path: string) => {
        setLoading(true)
        const url = `https://ecommerce-academlo-backend-5ir7.onrender.com${path}`
        axios.post(url, {}, getConfigToken())
            .then(response =>{
                setInfoApi( response.data )
                })
            .catch(error => console.log(error))
            .finally(() => {
                setLoading(false)
            })    
    }

    const updateCartQuantity = (path:string, id:number, data:{}) => {
        const url = `https://ecommerce-academlo-backend-5ir7.onrender.com${path}/${id}/`
        axios.put(url, data, getConfigToken())
            .then(reponse => reponse.data)
            .catch(error => console.log(error))
    }

    return { cart, getCart, hasError, loading, postApi, deleteApi, buyCart, updateCartQuantity} as const
}
export default useFetchCart