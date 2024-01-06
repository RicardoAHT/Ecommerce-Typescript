import React from 'react'
import Header from '../components/shared/Header'
import NavBar from '../components/shared/NavBar'
import PurchasesList from '../components/PurchasesPage/PurchasesList'

const PurchasesPage: React.FC = () => {
  return (
    <div>
      <NavBar/>
      <Header/>
      <h2 className='purchasesPage__h2'>Tu historial de compras:</h2>
      <div className='purchaseContainer'>
        <PurchasesList/>
      </div>
    </div>
  )
}

export default PurchasesPage
