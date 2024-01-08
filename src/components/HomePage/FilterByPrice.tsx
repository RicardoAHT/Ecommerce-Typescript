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
    <div className='filterByPrice'>
      <h3 className='filterByPrice__h3'>Filter Price</h3>
      <form className='filterByPrice__form' onSubmit={handleFilterPrice}>
        <div className='filterByPrice__form__container'>
          <div className='filterByPrice__form__div'>
              <label className='filterByPrice__form__div__label'  >
                Price from
              </label>
              <input 
                className='filterByPrice__form__div__input' 
                type="number" 
                ref={from}
              />
          </div>
          <div className='filterByPrice__form__div'>
              <label className='filterByPrice__form__div__label'>  
                Price to
              </label>
              <input 
                className='filterByPrice__form__div__input' 
                type="number"
                ref={to} 
              />
          </div>
        </div>
        <button>Search</button>
      </form>
    </div>
  )
}

export default FilterByPrice
