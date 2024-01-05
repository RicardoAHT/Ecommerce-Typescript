import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../store'
import useFetchCart from '../../hooks/useFetchCart'

const CartTotal: React.FC = () => {

  const {buyCart} = useFetchCart()
  const totalValue = useSelector((store: RootState) => store.cartValue)

  const handleBuy = () => {
    buyCart("/purchases")
  }

  return (
    <div className='cartTotal'>
      <div className='cartTotal__container'>
        <hr className='cartTotal__hr' />
        <span className='cartTotal__span'>Total: ${totalValue}</span>
        <button onClick={handleBuy}>Buy</button>
      </div>
    </div>
  )
}

export default CartTotal