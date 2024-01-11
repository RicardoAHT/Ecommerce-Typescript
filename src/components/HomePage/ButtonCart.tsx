import useFetchCart from '../../hooks/useFetchCart'

interface Products {
  brand: string;
  category:{
      createdAt: string
      id: number
      name:string
      updateAt: string
    };
  categoryId: number
  createdAt: string
  description: string;
  id: number
  images: [{
      createdAt: string
      id: number
      productId: number
      updateAt: string
      url: string
  }];
  price: number;
  title: string;
  updateAt: string
}

interface ProductCardProps {
  product: Products;
}

const ButtonCart: React.FC<ProductCardProps> = ({product}) => {
  
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