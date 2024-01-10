import React, { useEffect, useState } from 'react'
import CartCard from './CartCard'
import useFetchCart from '../../hooks/useFetchCart';
import Loading from '../shared/Loading';

interface Product {
    id: number;
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
        price: string;
        title: string;
        updateAt: string
    };
    productId: number;
    quantity: number;
    user:{
        email:string;
        id: number;
        firstName: string;
        lastName: string;
    }
  };

const CartList: React.FC = ({cartRefresh, setCartRefresh}) => {
    
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

return (
    <section className='carList'>
        <h3 className='cartList__h3'>Cart List</h3>
        <div className='cartList__container'>
            {
                cart?.map( product => (
                    <CartCard
                        key={product.id}
                        product={product as Product}
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