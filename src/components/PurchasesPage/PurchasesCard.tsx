import React from 'react'

interface Purchase {
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

const PurchasesCard: React.FC<{ purchase: Purchase }> = ({purchase}) => {
  const product = purchase.product

  return (
    <article className='cartCard'>
      <div className='cartCard__container__img'>
        <img src={
          (product === null)
            ? ""
            : product.images[0].url       
          } 
          alt="Imagen Producto"
          className='cartCard__img'
        />
      </div>
      <div className='cartCard__container'>
        <ul className='cartCard__ul'>
          <li className='cartCard__ul__li'>
            {
              (product === null)
                ? "No hay informacion del producto"
                : product.title
            }
          </li>
          <li>Quantity: 
            {purchase.quantity}</li>
          <li>Price: 
            {
              (product === null)
                ? "---"
                : purchase.quantity * parseInt(product.price)
            }

          </li>
          <li>Fecha: {purchase.createdAt}</li>

        </ul>
      </div>
    </article>
  )
}

export default PurchasesCard
