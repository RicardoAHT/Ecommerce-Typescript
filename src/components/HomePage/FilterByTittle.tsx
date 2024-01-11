import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { setSearchSlice } from '../../store/slices/search.slice'

const FilterByTittle: React.FC = () => {

    const inputSearch = useRef<HTMLInputElement>(null)
    const dispatch = useDispatch()

    const handleFilterText = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault()
      // @ts-ignore
      dispatch(setSearchSlice(`?title=${inputSearch.current?.value || ""}`))
    }

  return (
    <div >
      <form className='filter__form' onSubmit={handleFilterText}>
        <div className='filter__form__container'>
          <input 
            className='filter__form__div__inputTittle'
            type="text" 
            name="" 
            ref={inputSearch} 
            id=""
            placeholder='Que estas buscando?' 
          />
          <button className='filter__button'>Buscar</button>
        </div>
      </form>
    </div>
  )
}

export default FilterByTittle