import axios from "axios";
import { useState } from "react";

const useFetch = (url:string) => {

    interface ApiResponse{
        brand: string;
        category:{
            createdAt: string
            id: number
            name:string
            updateAt: string
          };
        categoryId: number
        createdAt: string
        description: string;
        id: number
        images: [{
            createdAt: string
            id: number
            productId: number
            updateAt: string
            url: string
        }];
        price: number;
        title: string;
        updateAt: string
    }

    const [infoApi, setInfoApi] = useState< ApiResponse[] | undefined>(undefined)
    const [hasError, setHasError] = useState(false)
    const [loading, setLoading] = useState(false)

    const getApi = () => {
        setLoading(true)
        axios.get<ApiResponse[]>(url)
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
export default useFetch