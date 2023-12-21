import React from 'react'
import Header from '../components/Header'
import NavBar from '../components/NavBar'
import PurchasesList from '../components/PurchasesPage/PurchasesList'

const PurchasesPage = () => {
  return (
    <div>
      <NavBar/>
      <Header/>
      <h2>Purchases</h2>
      <PurchasesList/>
    </div>
  )
}

export default PurchasesPage
