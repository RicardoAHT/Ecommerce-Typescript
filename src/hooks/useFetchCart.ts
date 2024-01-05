import axios from "axios";
import { useState } from "react";
import getConfigToken from "../services/getConfigToken";
import { useNavigate } from "react-router-dom";
import { setCartCounterSlice } from "../store/slices/cartCounter.slice";
import { useDispatch } from "react-redux";
import { setCartValueSlice } from "../store/slices/cartValue.slice";

const useFetchCart = () => {

    interface ApiResponse{ //! Verificar
        id: number;
        product:{
            brand: string;
            category:{
                id: number
                name:string
                updateAt: string
            };
            description: string;
            id: number
            images: [{
                id: number
                productId: number
                updateAt: string
                url: string
            }];
            price: string;
            title: string;
            updateAt: string
        };
        productId: number;
        quantity: number;
        user:{
            email:"Leo";
            id: number;
            firstName: string;
            lastName: string;
        }
    }

    const [cart, setInfoApi] = useState< ApiResponse[] | undefined>(undefined)
    const [hasError, setHasError] = useState(false)
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const getCart = (path: string) => {
        setLoading(true)
        const url = `https://ecommercebackendbyrick.onrender.com${path}`
        axios.get<ApiResponse[]>(url, getConfigToken())
            .then( res => {
                setInfoApi(res.data)
                setHasError(false)
                //console.log(res.data)
                const infoQuantity = res.data.map(product => product.quantity) //Creo un arreglo con la cantidades de los elementos actual en la api
                const counter = (productsQuantity: []) => { // Creo una funcion  que recibe un arreglo y suma el valor de todos sus elementos
                    let result = 0
                    productsQuantity.map( quantity => result += quantity)
                    return result
                }
                dispatch(setCartCounterSlice(counter(infoQuantity)))// Sumo todas las cantidades de los elementos del carrito
                const infoValue = res.data.map(product => product.product.price)
                const totalValue = (productsQuantity: [], productsValues: []) => {
                    let result = 0
                    for( let i = 0; i < productsValues.length; i++){
                        let mult = productsQuantity[i] * productsValues[i]
                        result += mult
                    }
                    return result
                }
                //console.log(res.data)
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
        const url = `https://ecommercebackendbyrick.onrender.com${path}`
        axios.post(url, data, getConfigToken())
            .then(response =>{
                //console.log(response.data)
                setInfoApi( response.data )
                // setInfoApi([...playList, response.data.info])
                })
            .catch(error => console.log(error))
            .finally(() => {
                setLoading(false)
            })    
    }

    const deleteApi = (path: string, id: number) =>{
        setLoading(true)
        const url = `https://ecommercebackendbyrick.onrender.com${path}/${id}`
        axios.delete(url, getConfigToken())
            .then(response => {
                //console.log(response.data)
                setInfoApi(response.data)
            })
            .catch(error => console.log(error))
            .finally(() => {
                setLoading(false)
            })
    }
    return { cart, getCart, hasError, loading, postApi, deleteApi} as const
}
export default useFetchCart