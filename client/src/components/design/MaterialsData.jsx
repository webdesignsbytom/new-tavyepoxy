import React from 'react';

function MaterialsData({ designDimensionsAndData, handleChange }) {
  return (
    <section className='grid grid-cols-aaa outline gap-2 outline-black outline-2 rounded p-1'>
      <div className='grid items-center'>
        <h4 className='text-sm'>Materials:</h4>
      </div>

      <div className='grid h-full'>
        <select
          id='material'
          name='material'
          className='grid h-full'
          onChange={handleChange}
          value={designDimensionsAndData.material} // Corrected this line
          required
        >
          <option value='MDF'>MDF (Standard)</option>
          <option value='Oak'>Oak</option>
          <option value='Walnut'>Walnut</option>
          <option value='Pine'>Pine</option>
          <option value='Cherry'>Cherry</option>
        </select>
      </div>
      <div className='grid grid-cols-rev'>
        <input className='pl-1' type='text' placeholder='Custom...' />
        <button
          className='text-xl active:scale-95 font-bold bg-slate-400 text-white px-2'
          type='submit'
          value='colour'
        >
          ⏎
        </button>
      </div>
    </section>
  );
}

export default MaterialsData;
