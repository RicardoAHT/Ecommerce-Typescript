import axios from "axios";
import { useState } from "react";
import getConfigToken from "../services/getConfigToken";

const useFetchToken = () => {

    interface ApiResponse{
        brand: string;
        category:{}
        description: string;
        id: number;
        price: string;
        title: string;
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