import React from 'react'
import NavBar from '../components/NavBar'
import Header from '../components/Header'
import ProductList from '../components/HomePage/ProductList'
import FilterByPrice from '../components/HomePage/FilterByPrice'
import FilterCategory from '../components/HomePage/FilterCategory'

const HomePage = () => {


  
  return (
    <div>
      <NavBar/>
      <Header/>
      <main>
        <section>
          <FilterByPrice/>
          <FilterCategory/>
        </section>
        <ProductList/>
      </main>

    </div>
  )
}

export default HomePage
