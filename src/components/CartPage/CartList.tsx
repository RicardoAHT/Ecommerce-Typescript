import React, { useEffect } from 'react'
import CartCard from './CartCard'
import useFetchCart from '../../hooks/useFetchCart';
import Loading from '../shared/Loading';


interface CartPageProps{
    setCartRefresh: React.Dispatch<React.SetStateAction<boolean>>;
    cartRefresh: boolean;
}
  

const CartList: React.FC< CartPageProps> = ({cartRefresh, setCartRefresh}) => {
    
    const {cart, getCart, hasError, loading} = useFetchCart()

    useEffect(() => {
        getCart("/cart")
    }, [cartRefresh])

    //console.log(cart)

    if(loading){
        return(
            <div>
                <Loading/>
            </div>
        )
    }

    if (hasError) {
        return <p>Error al obtener los datos.</p>;
    }

return (
    <section className='carList'>
        <h3 className='cartList__h3'>Cart List</h3>
        <div className='cartList__container'>
            {
                cart?.map( product => (
                    <CartCard
                        key={product.id}
                        product={product}
                        setCartRefresh={setCartRefresh}
                        cartRefresh={cartRefresh}
                    />
                ))
            }
        </div>
    </section>
  )
}

export default CartList