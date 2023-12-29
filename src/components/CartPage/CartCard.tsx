import React, { useState } from 'react'
import { deleteProduct } from '../../store/slices/cart.slice';
import { useDispatch } from 'react-redux';

interface CartCardProps {
  product: {
    id: number;
    title: string;
    price: number;
    // Agrega otras propiedades del producto según sea necesario
  };
}



const CartCard: React.FC<CartCardProps> = ({product}) => {

  const [quantity, setQuantity] = useState(1)

  const handlePlusQuantity = () => {
    let counter = quantity
    setQuantity(counter += 1)
  }

  const handleMinusQuantity = () => {
    let counter = quantity
    if(counter > 1){
      setQuantity(counter -= 1)
    }
  }
  const dispatch = useDispatch()
  const handleDelete = () => {
    dispatch(deleteProduct(product))
  }

  return (
    <article className='cartCard'>
      <div className='cartCard__container'>
        <ul className='cartCard__ul'>
          <li className='cartCard__ul__li'>imagen</li>
          <li className='cartCard__ul__li'>{product.title}</li>
          <li className='cartCard__ul__li'>{product.price}</li>
        </ul>
        <button onClick={handleMinusQuantity}> - </button>
          <span> {quantity} </span>
        <button onClick={handlePlusQuantity}> + </button>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </article>
  )
}

export default CartCard
