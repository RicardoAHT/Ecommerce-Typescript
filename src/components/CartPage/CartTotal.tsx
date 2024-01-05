import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../store'

const CartTotal: React.FC = () => {

  const totalValue = useSelector((store: RootState) => store.cartValue)

  return (
    <div className='cartTotal'>
      <div className='cartTotal__container'>
        <hr className='cartTotal__hr' />
        <span className='cartTotal__span'>Total: ${totalValue}</span>
      </div>
    </div>
  )
}

export default CartTotal
