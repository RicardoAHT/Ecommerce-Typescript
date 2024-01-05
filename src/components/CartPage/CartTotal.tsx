import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../store'

const CartTotal: React.FC = () => {

  const totalValue = useSelector((store: RootState) => store.cartValue)

  return (
    <div>
      <span>Total: ${totalValue}</span>
    </div>
  )
}

export default CartTotal
