import React from 'react'
import NavBar from '../components/shared/NavBar'
import Header from '../components/shared/Header'
import ProductList from '../components/HomePage/ProductList'
import Footer from '../components/shared/Footer'

const HomePage: React.FC = () => {


  return (
    <div>
      <NavBar/> {/*Renderizo eñ navegador */}
      <Header/>
      <main className='homePage__main'>
        <ProductList/> {/*Lista de Productos para agregar al estado global del carrito */}
      </main>
      <Footer/>
    </div>
  )
}

export default HomePage
