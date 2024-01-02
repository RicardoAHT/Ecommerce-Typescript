import axios from "axios";
import { useState } from "react";
import getConfigToken from "../services/getConfigToken";

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

    const getApi = (path: string) => {
        setLoading(true)
        const url = `https://ecommercebackendbyrick.onrender.com${path}`
        axios.get<ApiResponse[]>(url, getConfigToken())
            .then( res => {
                setInfoApi(res.data)
                setHasError(false)
            })
            .catch( error => {
                setHasError(true)
                console.log(error)
            })
            .finally(() => {
                setLoading(false)
            })      
    }

    const postApi = (path: string) => {
        setLoading(true)
        const url = `https://ecommercebackendbyrick.onrender.com${path}`
        axios.post(url, data, getConfigToken())
            .then(response =>{
                console.log(response.data)
                setInfoApi([...infoApi, response.data])
                // setInfoApi([...playList, response.data.info])
                })
            .catch(error => console.log(error))
    }


    return [ infoApi, getApi, hasError, loading] as const
}
export default useFetchCart