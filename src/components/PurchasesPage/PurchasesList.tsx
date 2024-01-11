import React, { useEffect } from 'react'
import PurchasesCard from './PurchasesCard'
import Loading from '../shared/Loading'
import useFetchToken from '../../hooks/useFetchToken'

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
