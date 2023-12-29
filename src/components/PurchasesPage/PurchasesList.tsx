import React, { useEffect } from 'react'
import PurchasesCard from './PurchasesCard'
//import useFetch from '../../hooks/useFetch'
import Loading from '../shared/Loading'
import useFetchToken from '../../hooks/useFetchToken'

interface Purchase {
  id: number;
  productId: number;
  createdAt: string;
  // Agrega otras propiedades del objeto Purchase según sea necesario
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
