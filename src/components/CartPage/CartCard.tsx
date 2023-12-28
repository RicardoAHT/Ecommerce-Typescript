import React from 'react'

const CartCard = ({product}) => {
  return (
    <article className='cartCard'>
      <div className='cartCard__container'>
        <ul className='cartCard__ul'>
          <li className='cartCard__ul__li'>imagen</li>
          <li className='cartCard__ul__li'>{product.title}</li>
          <li className='cartCard__ul__li'>{product.price}</li>
          <li className='cartCard__ul__li'> quantity</li>
        </ul>
        <button></button>
      </div>
    </article>
  )
}

export default CartCard
