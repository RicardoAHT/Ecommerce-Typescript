import React from 'react'
import { addProduct } from '../../store/slices/cart.slice'
import { useDispatch } from 'react-redux'

const ButtonCart: React.FC = ({product}) => {

  const dispatch = useDispatch()
  const handleAddCart = () => {// Agrego producto al estado global del carrito
    dispatch(addProduct(product)) // Agrego la informacion del producto al carrito
  }

  return (
    <div className='buttonCart'>
      <button className='buttonCart__button' onClick={handleAddCart}>
        Add +
      </button>
    </div>
  )
}

export default ButtonCart
