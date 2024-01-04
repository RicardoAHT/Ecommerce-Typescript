import axios from "axios";
import { useState } from "react";
import getConfigToken from "../services/getConfigToken";
import { useNavigate } from "react-router-dom";
import { setCartCounterSlice } from "../store/slices/cartCounter.slice";
import { useDispatch } from "react-redux";

const useFetchCart = () => {

    interface ApiResponse{ //! Verificar
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
            price: number;
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

    const [infoApi, setInfoApi] = useState< ApiResponse[] | undefined>(undefined)
    const [hasError, setHasError] = useState(false)
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const getApi = (path: string) => {
        setLoading(true)
        const url = `https://ecommercebackendbyrick.onrender.com${path}`
        axios.get<ApiResponse[]>(url, getConfigToken())
            .then( res => {
                setInfoApi(res.data)
                setHasError(false)
                console.log(res.data)
                const info = res.data.map(product => product.quantity)
                const counter = (productsQuantity) => {
                    let result = 0
                    productsQuantity.map( quantity => result += quantity)
                    return result
                    
                }
                dispatch(setCartCounterSlice(counter(info)))

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


    return [ infoApi, getApi, hasError, loading, postApi, deleteApi] as const
}
export default useFetchCart