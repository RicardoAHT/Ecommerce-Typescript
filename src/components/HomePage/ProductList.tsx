import React, { useEffect } from 'react'
import useFetch from '../../hooks/useFetch'
import ProductCard from './ProductCard'
import Loading from '../shared/Loading'

interface Products {
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
}



const ProductList: React.FC = () => {

    const url = "https://ecommercebackendbyrick.onrender.com/products"
    const [products, getProducts, hasError, loading] = useFetch<Products[]>(url)
  
    useEffect(() => {
      getProducts()
    }, [])

    if (loading) {
      return (
        <div>
          <Loading/>
        </div>
      );
    }
  
    if (hasError) {
      return <p>Error al obtener los datos.</p>;
    }
  
    console.log(products)


  return (
    <section className='productList'>
      {
        products?.map(product => (
            <ProductCard
              key={product.id}
              product={product}
            />
            ))
      }
    </section>
  )
}

export default ProductList
