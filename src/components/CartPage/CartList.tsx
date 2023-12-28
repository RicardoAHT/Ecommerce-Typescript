import React from 'react'
import { useSelector } from 'react-redux'
import CartCard from './CartCard'
import { RootState } from '@reduxjs/toolkit/query'

const CartList: React.FC = () => {
    
    const cart = useSelector((store: RootState) => store.cart)


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

//import useFetchToken from '../../hooks/useFetchToken'
//import Loading from '../shared/Loading'
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
   
// console.log(cart)