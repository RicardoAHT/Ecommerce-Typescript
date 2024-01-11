import React, { useEffect } from 'react'
import useFetchToken from '../../hooks/useFetchToken'
import { setSearchSlice } from '../../store/slices/search.slice';
import { useDispatch } from 'react-redux';
import FilterByTittle from './FilterByTittle';

const FilterCategory: React.FC = () => {

  const [categories, getCategories] = useFetchToken()
  const dispatch = useDispatch()
  useEffect(() => {
    getCategories("/categories")
  }, [])

  const handleCategory = (event: React.ChangeEvent<HTMLSelectElement>) => {
    // @ts-ignore
    dispatch(setSearchSlice(`?categoryId=${event.target.value}`))
  }

  return (
    <div className='filter'>
      <h3 className='filter__h3'>Filtra por Categoria</h3>
      <form className='filter__form'  >
        <select className='filter__select' onChange={handleCategory} name="" id="">
          <option value="">Todas las categorias</option>
          {
            categories?.map(category => (
              <option 
                key={category.id} 
                value={category.id}
              >
                {category.name}
              </option>
            ))
          }
        </select>
      </form>
      <FilterByTittle/>
    </div>
  )
}

export default FilterCategory
