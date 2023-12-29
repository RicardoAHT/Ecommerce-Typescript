import axios from "axios";
import { useState } from "react";

const useFetch = (url:string) => {

    interface ApiResponse{
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
    }

   /* interface Product {
        brand: string;
        category:{}
        description: string;
        id: number;
        price: string;
        title: string;
        // Aqui se colocan los campos que se traen de la respuesta de la API
      }*/

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