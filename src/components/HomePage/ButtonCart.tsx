import useFetchCart from '../../hooks/useFetchCart'

const ButtonCart: React.FC = ({product}) => {
  
  const data = { productId:product.id, quantity:1}
  const {postApi} = useFetchCart()

  const addProductAtCart = () => {
    postApi("/cart", data)
  }
  

  return (
    <div className='buttonCart'>
      <button className='buttonCart__button' onClick={addProductAtCart} >
        Add +
      </button>
    </div>
  )
}

export default ButtonCart





/*
import { addProduct } from '../../store/slices/cart.slice'
import { useDispatch } from 'react-redux'
const handleAddCart = () => {// Agrego producto al estado global del carrito
const dispatch = useDispatch()
dispatch(addProduct(product)) // Agrego la informacion del producto al carrito

      <button className='buttonCart__button' onClick={handleAddCart}>
        Add +
      </button>
}*/
