import React, { useRef } from 'react'
import { setPriceFilterSlice } from '../../store/slices/priceFilter.slice'
import { useDispatch } from 'react-redux'

const FilterByPrice: React.FC = () => {

  const from = useRef()
  const to = useRef()
  const dispatch = useDispatch()
  const handleFilterPrice = () => {
    let min = parseInt(from.current.value)
    let max = parseInt(to.current.value)
    if(max*0 !== 0){ max = Infinity}
    if(min*0 !== 0){ min = 0}
    console.log(max)
    dispatch(setPriceFilterSlice([min, max]))
  }
  
  return (
    <div className='filter'>
      <h3 className='filter__h3'>Filtra por Precio</h3>
      <form className='filter__form' onSubmit={handleFilterPrice}>
        <div className='filter__form__container'>
          <div className='filter__form__div'>
              <input 
                className='filter__form__div__input' 
                type="number" 
                ref={from}
                placeholder='Desde'
              />
          </div>
          <div className='filter__form__div'>
              <input 
                className='filter__form__div__input' 
                type="number"
                ref={to} 
                placeholder='Hasta'
              />
          </div>
        </div>
        <button className='filter__button'>Buscar</button>
      </form>
    </div>
  )
}

export default FilterByPrice
