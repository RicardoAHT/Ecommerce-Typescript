import axios from "axios";
import { useState } from "react";
import getConfigToken from "../services/getConfigToken";

const useFetchToken = () => {

    interface ApiResponse{ //! Verificar
        product:{
            id:number
            title: string
            price: string
            images:[
              {
                url: string
              }
            ]
          }
          id: number;
          quantity: number
          productId: number;
          createdAt: string;
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

    return [ infoApi, getApi, hasError, loading] as const
}
export default useFetchToken