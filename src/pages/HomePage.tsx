import React from 'react'
import NavBar from '../components/shared/NavBar'
import Header from '../components/shared/Header'
import ProductList from '../components/HomePage/ProductList'

const HomePage: React.FC = () => {


  return (
    <div>
      <NavBar/> {/*Renderizo eñ navegador */}
      <Header/>
      <main>
        <ProductList/> {/*Lista de Productos para agregar al estado global del carrito */}
      </main>

    </div>
  )
}

export default HomePage
