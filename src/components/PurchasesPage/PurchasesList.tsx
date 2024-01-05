import React, { useEffect } from 'react'
import PurchasesCard from './PurchasesCard'
import Loading from '../shared/Loading'
import useFetchToken from '../../hooks/useFetchToken'

interface Purchase { // Agrego la estructura de datos
  id: number;
  productId: number;
  createdAt: string;
}

const PurchasesList: React.FC = () => {

  const [purchases, getPurchases, hasError, loading] = useFetchToken()

  useEffect(() => {
    getPurchases("/purchases")
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
  
  console.log(purchases)
  return (
    <section className='purchasesList'>
      <h2>Purchases List</h2>
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
