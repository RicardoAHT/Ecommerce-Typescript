import React from 'react'

const FilterByPrice = () => {
  return (
    <div className='filterByPrice'>
      <h3 className='filterByPrice__h3'>Filter Price</h3>
      <form className='filterByPrice__form'>
        <div className='filterByPrice__form__container'>
          <div className='filterByPrice__form__div'>
              <label className='filterByPrice__form__div__label'  >
                Price from
              </label>
              <input 
                className='filterByPrice__form__div__input' 
                type="number" 
              />
          </div>
          <div className='filterByPrice__form__div'>
              <label className='filterByPrice__form__div__label'>  
                Price to
              </label>
              <input 
                className='filterByPrice__form__div__input' 
                type="number" 
              />
          </div>
        </div>
        <button>Search</button>
      </form>
    </div>
  )
}

export default FilterByPrice
