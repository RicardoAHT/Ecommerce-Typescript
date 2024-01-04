import React, { useEffect, useState } from 'react'
import useFetchCart from '../../hooks/useFetchCart';
import { setCartCounterSlice } from '../../store/slices/cartCounter.slice';
import { useDispatch, useSelector } from 'react-redux';

interface CartCardProps {
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
    price: number;
    title: string;
    updateAt: string
};
productId: number;
quantity: number;
user:{
    email:"Leo";
    id: number;
    firstName: string;
    lastName: string;
}
}

const CartCard: React.FC<CartCardProps> = ({product, setDeleteApiEffect, deleteApiEffect}) => {

  const [quantity, setQuantity] = useState(product.quantity)
  const [ infoApi, getApi, hasError, loading, postApi, deleteApi ] = useFetchCart()

  const id = product.id
  
  let cartCounter = useSelector(store => store.cartCounter)
  const dispatch = useDispatch()

  const handlePlusQuantity = () => {
    let counter = quantity
    setQuantity(counter += 1)
    cartCounter += 1
    dispatch(setCartCounterSlice(cartCounter))
  }

  const handleMinusQuantity = () => {
    let counter = quantity
    if(counter > 1){
      setQuantity(counter -= 1)
      cartCounter -= 1
      dispatch(setCartCounterSlice(cartCounter))
    }
  }

  const handleDelete = () => {
    deleteApi("/cart", id)
    setDeleteApiEffect(!deleteApiEffect)
  }

  useEffect(() => {
    
  }, [loading])
  
  return (
    <article className='cartCard'>
      <div className='cartCard__container'>
        <ul className='cartCard__ul'>
          <img src={product.product.images[0].url} alt="Imagen Producto" />
          <li className='cartCard__ul__li'>{product.product.title}</li>
          <li className='cartCard__ul__li'>{product.product.price}</li>
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
