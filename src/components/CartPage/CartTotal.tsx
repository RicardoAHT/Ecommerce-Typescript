import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../store'
import useFetchCart from '../../hooks/useFetchCart'

const CartTotal: React.FC = ({cartRefresh, setCartRefresh}) => {

  const {buyCart} = useFetchCart()
  const totalValue = useSelector((store: RootState) => store.cartValue)

  const handleBuy = () => {
    buyCart("/purchases")
    setCartRefresh(!cartRefresh)
  }

  return (
    <div className='cartTotal'>
      <div className='cartTotal__container'>
        <hr className='cartTotal__hr' />
        <div className='cartTotal__container__buy'>
          <span className='cartTotal__span'>Total: ${totalValue} </span>
          <button className='cartTotal__button' onClick={handleBuy}>Comprar</button>
        </div>
      </div>
    </div>
  )
}

export default CartTotal