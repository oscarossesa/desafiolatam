import React, { useContext } from 'react'
import BuscarHeroPlaceholder from './../../contexts/PlaceholderContext'

const TableFilter = () => {
  const placeholder = useContext(BuscarHeroPlaceholder)
  return (
    <div className='search-input'>
      <input type='text' placeholder={placeholder} />
    </div>
  )
}

export default TableFilter
