import React, { useState } from 'react';
import { useTaskContext } from '../../context/task_context';

const SearchBar = () => {
  const { filters, updateFilters } = useTaskContext();

  return (
    <div className='search-bar-container'>
      <input
        name='text'
        type='text'
        className='search-bar'
        placeholder='search'
        value={filters.text}
        onChange={updateFilters}
      />
    </div>
  );
};

export default SearchBar;
