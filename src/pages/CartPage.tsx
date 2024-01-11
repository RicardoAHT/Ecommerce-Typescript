import React, { useState } from 'react'
import NavBar from '../components/shared/NavBar'
import Header from '../components/shared/Header'
import CartList from '../components/CartPage/CartList'
import CartTotal from '../components/CartPage/CartTotal'

const CartPage: React.FC = () => {

  const [cartRefresh, setCartRefresh]= useState(false)

  return (
    <>
      <NavBar/>
      <Header/>
      <CartList
        setCartRefresh={setCartRefresh}
        cartRefresh={cartRefresh}
      />
      <CartTotal
        setCartRefresh={setCartRefresh}
        cartRefresh={cartRefresh}
      />
    </>
  )
}

export default CartPage
