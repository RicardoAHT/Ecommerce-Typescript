import React from 'react'
import ButtonCart from './ButtonCart'
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

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


const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const priceFilter = useSelector((store: RootState) => store.priceFilter)
  if(product.price >= priceFilter[0] && product.price <= priceFilter[1]){
    
    return (
      <article className='productCard'>
        <div className='productCard__container'>
          <img className='productCard__container__img'  src={product.images[0].url} alt="Producto" />
        </div>
        <div className='productCard__container__info'>
          <h3 className='productCard__h3'>{product.title}</h3>
          <ul className='productCard__ul'>
              <li className='productCard__ul__li'>
                <span className="productCard__ul__li__span">
                  Marca:{" "} 
                </span>
                <span>
                  {product.brand}
                </span>
              </li>
              <li className='productCard__ul__li'>
                <span className="productCard__ul__li__span">
                  Categoria:{" "} 
                </span>
                <span>
                  {product.category.name}
                </span>
              </li>
              <li className='productCard__ul__li'>
                <span className="productCard__ul__li__span">
                  Descripcion: {" "} 
                </span>
                <span>
                  {product.description}
                </span>
              </li>
              <li className='productCard__ul__li'>
                <span className="productCard__ul__li__span">
                  Precio: {" "} 
                </span>
                <span>
                  {product.price}
                </span>
              </li>
          </ul>
          <ButtonCart
            product={product} // Envio la informacion de cada producto
            />
        </div>
    </article>
  )
}
}

export default ProductCard
