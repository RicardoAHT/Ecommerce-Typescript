import React, { useEffect } from 'react'
import useFetch from '../../hooks/useFetch'
import ProductCard from './ProductCard'
import Loading from '../shared/Loading'
import FilterByPrice from './FilterByPrice'
import FilterCategory from './FilterCategory'
import { useSelector } from 'react-redux'
import { RootState } from '../../store'

const ProductList: React.FC = () => {

    const search = useSelector((store: RootState) => store.search)
    const priceFilter = useSelector((store: RootState) => store.priceFilter)

    const url = `https://ecommercebackendbyrick.onrender.com/products${search}`
    const [products, getProducts, hasError, loading] = useFetch(url)
  
    useEffect(() => {
      getProducts()
    }, [search, priceFilter])

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

    return (
      <>
      <div className='homepage__Container'>
        <FilterByPrice
        />
        <FilterCategory/>
      </div>
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
    </>
  )
}

export default ProductList
