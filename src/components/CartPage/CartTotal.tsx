import React from 'react'
import { useSelector } from 'react-redux'

const CartTotal = () => {

    const totalValue = useSelector(store => store.cartValue)

  return (
    <div>
      <span>Total: ${totalValue}</span>
    </div>
  )
}

export default CartTotal
