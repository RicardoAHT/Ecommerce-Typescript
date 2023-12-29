import React from 'react'

const PurchasesCard: React.FC = ({purchase}) => {
  return (
    <div>
      <ul>
        <li>{purchase.id}</li>
        <li>{purchase.productId}</li>
        <li>{purchase.createdAt}</li>
        <li>Quantity</li>
        <li>Price</li>
      </ul>
    </div>
  )
}

export default PurchasesCard
