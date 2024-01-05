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