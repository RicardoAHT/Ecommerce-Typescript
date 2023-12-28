import React from 'react'
import NavBar from '../components/shared/NavBar'
import Header from '../components/shared/Header'
import CartList from '../components/CartPage/CartList'

const CartPage: React.FC = () => {
  return (
    <>
      <NavBar/>
      <Header/>
      <h2>Cart Page</h2>
      <CartList/>
    </>
  )
}

export default CartPage
