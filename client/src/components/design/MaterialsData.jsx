import React from 'react';
import MaterialDropdownMenu from './dropdown/MaterialDropdownMenu';

function MaterialsData({ designDimensionsAndData, handleChange }) {
  return (
    <section className='grid grid-cols-aaa outline gap-2 outline-black outline-2 rounded p-1'>
      <div className='grid items-center'>
        <h4 className='text-sm'>Materials:</h4>
      </div>

      <div className='grid h-full'>
        <MaterialDropdownMenu />
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
