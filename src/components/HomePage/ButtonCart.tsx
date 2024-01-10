import useFetchCart from '../../hooks/useFetchCart'

const ButtonCart: React.FC = ({product}) => {
  
  const data = { productId:product.id, quantity:1}
  const {postApi} = useFetchCart()

  const addProductAtCart = () => {
    postApi("/cart", data)
  }
  
  return (
    <div className='buttonCart__container'>
      <button className='buttonCart' onClick={addProductAtCart} >
        <div className="buttonCart__div">
          Agrega al carrito
        </div>
      </button>
    </div>
  )
}

export default ButtonCart