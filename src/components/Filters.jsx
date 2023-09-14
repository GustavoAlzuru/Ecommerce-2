import React, { useState } from 'react';

const Filters = ({setCategory, setPrices}) => {

  return (
    <div className='pt-20 flex gap-5'>
      <div>
        <label>Categories: </label>
        <select
          className='rounded-3xl pl-1 pr-1 outline-none text-black m-1 border'
          onChange={(e) => setCategory(e.target.value)}
        >
          <optgroup label='Categories: ' className='text-xs'>
            <option value='all'>All</option>
            <option value="men's clothing">Men's clothing</option>
            <option value="women's clothing">Women's clothing</option>
            <option value='jewelery'>Jewelry</option>
            <option value='electronics'>Electronics</option>
          </optgroup>
        </select>
      </div>
      <div>
        <label>Sort Prices: </label>
        <select
          className='rounded-3xl pl-1 pr-1 outline-none text-black m-1 border'
          onChange={(e) => setPrices(e.target.value)}
        >
          <optgroup label='Sort By:' className='text-xs'>
            <option value='featured'>Featured</option>
            <option value='low'>Low to high</option>
            <option value='high'>High to Low</option>
          </optgroup>
        </select>
      </div>
    </div>
  );
};

export default Filters;
