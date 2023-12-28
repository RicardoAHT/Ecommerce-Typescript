import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CartCard from './CartCard'
//import useFetchToken from '../../hooks/useFetchToken'
//import Loading from '../shared/Loading'

const CartList = () => {

/*
    //const [cart, getCart, hasError, loading] = useFetchToken()
    useEffect(() => {
      //getCart("/cart")
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
*/

const dispatch = useDispatch()
const cart = useSelector(store => store.cart)

useEffect(() => {
    
}, [])

// console.log(cart)
  return (
    <section className='carList'>
        <h3 className='cartList__h3'>Cart List</h3>
        <div className='cartList__container'>
            {
                cart.map( product => (
                    <CartCard
                        key={product.id}
                        product={product}
                    />
                ))
            }
        </div>
    </section>
  )
}

export default CartList
