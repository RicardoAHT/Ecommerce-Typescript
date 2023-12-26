import React from 'react'
import ButtonCart from './ButtonCart'

const ProductCard = ({ product }) => {
  return (
    <article className='productCard'>
        <div className='productCard__container'>
          <img className='productCard__container__img'  src={product.images[0].url} alt="Producto" />
        </div>
        <h3 className='productCard__h3'>{product.title}</h3>
        <ul className='productCard__ul'>
            <li className='productCard__ul__li'>Marca: {product.brand}</li>
            <li className='productCard__ul__li'>Categoria: {product.category.name}</li>
            <li className='productCard__ul__li'>Descripcion: {product.description}</li>
            <li className='productCard__ul__li'>Precio: {product.price}</li>
        </ul>
        <ButtonCart
          product={product} // Envio la informacion de cada producto
        />
    </article>
  )
}

export default ProductCard
