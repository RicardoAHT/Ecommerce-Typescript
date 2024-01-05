import React from 'react'
import { useSelector } from 'react-redux'

const CounterElements: React.FC = () => {

  const cartCounter = useSelector(store => store.cartCounter)

  return (
    <div >
      <div className='iconContainer'>
        <i className="fa-solid fa-cart-shopping icon"></i>
        <div  className='counter'>
          <p>{cartCounter}</p>
        </div>
      </div >
    </div>
  )
}

export default CounterElements
