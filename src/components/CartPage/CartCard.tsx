import React, { useState } from 'react'
import useFetchCart from '../../hooks/useFetchCart';
import { setCartCounterSlice } from '../../store/slices/cartCounter.slice';
import { useDispatch, useSelector } from 'react-redux';
import { setCartValueSlice } from '../../store/slices/cartValue.slice';
import { RootState } from '../../store';

interface CartCardProps {
product:{
id: number;
product:{
    brand: string;
    category:{
        id: number
        name:string
        updateAt: string
    };
    description: string;
    id: number
    images: [{
        id: number
        productId: number
        updateAt: string
        url: string
    }];
    price: string; //! Estar pendientes de la conversion
    title: string;
    updateAt: string
};
productId: number;
quantity: number;
user:{
    email:string;
    id: number;
    firstName: string;
    lastName: string;
}
}
}

const CartCard: React.FC<CartCardProps> = ({product, setDeleteApiEffect, deleteApiEffect}) => {

  const [quantity, setQuantity] = useState(product.quantity)
  const { deleteApi, updateCartQuantity } = useFetchCart()

  const id = product.id // Accedo al id especifico del producto iterado por el map previamente
  const productTotal = quantity * parseInt(product.product.price) 
  
  //console.log(id)
  let cartCounter = useSelector((store: RootState) => store.cartCounter)
  const dispatch = useDispatch()
  const totalValue = useSelector((store: RootState) => store.cartValue)

  const handlePlusQuantity = () => {
    let counter = quantity
    setQuantity(counter += 1)
    cartCounter += 1
    dispatch(setCartCounterSlice(cartCounter))
    let value = totalValue + parseInt(product.product.price)
    dispatch(setCartValueSlice(value))
    updateCartQuantity("/cart", id, {quantity:counter})
  }

  const handleMinusQuantity = () => {
    let counter = quantity
    if(counter > 1){
      setQuantity(counter -= 1)
      cartCounter -= 1
      dispatch(setCartCounterSlice(cartCounter))
      let value = totalValue - parseInt(product.product.price)
      dispatch(setCartValueSlice(value))
      updateCartQuantity("/cart", id, {quantity:counter})
    }
  }

  const handleDelete = () => {
    deleteApi("/cart", id)
    setDeleteApiEffect(!deleteApiEffect)
  }
  
  return (
    <article className='cartCard'>
        <div className='cartCard__container__img'>
          <img className='cartCard__img' src={product.product.images[0].url} alt="Imagen Producto" />
        </div>
        <div className='cartCard__container'>
          <ul className='cartCard__ul'>
              <li className='cartCard__ul__li'>{product.product.title}</li>
              <li className='cartCard__ul__li'>Precio: ${product.product.price}</li>
          </ul>
          <div className='cartCard__container__button'>
            <span>Cantidad: </span>
            <button onClick={handleMinusQuantity}> - </button>
              <span> {quantity} </span>
            <button onClick={handlePlusQuantity}> + </button>
            <button onClick={handleDelete}>
            <i className="fa-solid fa-trash"></i>
            </button>
          </div>
            <p>Total: ${productTotal}</p>
        </div>
    </article>
  )
}

export default CartCard
