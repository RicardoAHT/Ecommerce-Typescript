import React from 'react'

const FilterByPrice = () => {
  return (
    <div>
      <h3>Filter Price</h3>
      <form>
        <div>
            <label >Price from</label>
            <input type="number" />
        </div>
        <div>
            <label >Price to</label>
            <input type="number" />
        </div>
        <button>Search</button>
      </form>
    </div>
  )
}

export default FilterByPrice
