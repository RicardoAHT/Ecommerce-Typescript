import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { setSearchSlice } from '../../store/slices/search.slice'

const FilterByTittle: React.FC = () => {

    const inputSearch = useRef()
    const dispatch = useDispatch()

    const handleFilterText = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault()
      dispatch(setSearchSlice(`?title=${inputSearch.current.value}`))
    }

  return (
    <div>
      <form onSubmit={handleFilterText}>
        <div>
          <input type="text" name="" ref={inputSearch} id="" />
          <button>Search</button>
        </div>
      </form>
    </div>
  )
}

export default FilterByTittle