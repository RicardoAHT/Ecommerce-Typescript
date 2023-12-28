import React from 'react'
import NavBar from '../components/shared/NavBar'
import Header from '../components/shared/Header'
import ProductList from '../components/HomePage/ProductList'
import FilterByPrice from '../components/HomePage/FilterByPrice'
import FilterCategory from '../components/HomePage/FilterCategory'

const HomePage: React.FC = () => {


  return (
    <div>
      <NavBar/> {/*Renderizo eñ navegador */}
      <Header/>
      <div className='homepage__Container'>
        <FilterByPrice/>
        <FilterCategory/>
      </div>
      <main>
        <ProductList/> {/*Lista de Productos para agregar al estado global del carrito */}
      </main>

    </div>
  )
}

export default HomePage
