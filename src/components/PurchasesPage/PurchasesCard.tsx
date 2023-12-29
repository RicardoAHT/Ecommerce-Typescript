import React from 'react'

interface Purchase {
  id: number;
  productId: number;
  createdAt: string;
}

const PurchasesCard: React.FC<{ purchase: Purchase }> = ({purchase}) => {
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
