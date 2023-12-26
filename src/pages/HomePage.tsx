import React from 'react'
import NavBar from '../components/shared/NavBar'
import Header from '../components/shared/Header'
import ProductList from '../components/HomePage/ProductList'
import FilterByPrice from '../components/HomePage/FilterByPrice'
import FilterCategory from '../components/HomePage/FilterCategory'
import { useSelector } from 'react-redux'

const HomePage = () => {

  const cartList = useSelector(store => store.cart)
  
  console.log(cartList)

  return (
    <div>
      <NavBar/>
      <Header/>
      <div className='homepage__Container'>
        <FilterByPrice/>
        <FilterCategory/>
      </div>
      <main>
        <ProductList/>
      </main>

    </div>
  )
}

export default HomePage
