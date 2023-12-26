import React from 'react'
import NavBar from '../components/shared/NavBar'
import Header from '../components/shared/Header'
import CartList from '../components/CartPage/CartList'

const CartPage = () => {
  return (
    <section>
      <NavBar/>
      <Header/>
      <h2>Cart Page</h2>
      <CartList/>
    </section>
  )
}

export default CartPage
