import React, { useEffect } from 'react'
import PurchasesCard from './PurchasesCard'
import Loading from '../shared/Loading'
import useFetchToken from '../../hooks/useFetchToken'

interface Purchase { // Agrego la estructura de datos
  product:{
    id:number
    title: string
    price: string
    images:[
      {
        url: string
      }
    ]
  }
  id: number;
  quantity: number
  productId: number;
  createdAt: string;
}

const PurchasesList: React.FC = () => {

  const [purchases, getPurchases, hasError, loading] = useFetchToken()

  useEffect(() => {
    getPurchases("/purchases")
  }, [])
  //console.log(purchases)
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
  
  console.log(purchases)
  return (
    <section className='purchasesList'>
      <article>
        {
          purchases?.map(purchase => (
            <PurchasesCard
              key={purchase.id}
              purchase={purchase}
            />
          ))
        }
      </article>
    </section>
  )
}

export default PurchasesList
