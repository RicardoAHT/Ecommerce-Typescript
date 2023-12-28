import React from 'react'
import Header from '../components/shared/Header'
import NavBar from '../components/shared/NavBar'
import PurchasesList from '../components/PurchasesPage/PurchasesList'

const PurchasesPage: React.FC = () => {
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
