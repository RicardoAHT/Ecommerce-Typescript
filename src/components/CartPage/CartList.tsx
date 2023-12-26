import React, { useEffect } from 'react'
import useFetchToken from '../../hooks/useFetchToken'
import Loading from '../shared/Loading'

const CartList = () => {


    const [cart, getCart, hasError, loading] = useFetchToken()

    useEffect(() => {
      getCart("/cart")
    }, [])

    if(loading){
        return (
            <div>
                <Loading/>
            </div>
        )
    }
    if (hasError) {
        return <p>Error al obtener los datos.</p>;
    }
    
 console.log(cart)

  return (
    <section>
        <h3>Cart List</h3>

    </section>
  )
}

export default CartList
