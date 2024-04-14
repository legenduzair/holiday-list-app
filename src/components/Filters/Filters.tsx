import { useState } from 'react';
import './filters.css'

const Filters = ({ onFilterChange }: any) => {
  
  const handleFilterChange = (filter: any) => {
    onFilterChange(filter);
  }
  return (
    <div className='filters-container'>
        <button onClick={() => handleFilterChange('alphabetical')}>sort alphabetically</button>
        <button onClick={() => handleFilterChange('price')}>sort by price</button>
        <button onClick={() => handleFilterChange('starRating')}>sort by star rating</button>
    </div>
  )
}

export default Filters