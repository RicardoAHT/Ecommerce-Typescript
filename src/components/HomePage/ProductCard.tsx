import React from 'react'
import ButtonCart from './ButtonCart'

const ProductCard = ({ product }) => {
  return (
    <article>
        <img src={product.images[0].url} alt="Producto" />
        <h3>{product.title}</h3>
        <ul>
            <li>Marca: {product.brand}</li>
            <li>Categoria: {product.category.name}</li>
            <li>Descripcion: {product.description}</li>
            <li>Precio: {product.price}</li>
        </ul>
        <ButtonCart/>
    </article>
  )
}

export default ProductCard
