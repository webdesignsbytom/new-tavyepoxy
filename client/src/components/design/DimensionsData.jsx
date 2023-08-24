import React, { useContext } from 'react';
// Context
import { DesignContext } from '../../context/DesignContext';
import ThicknessDropdownMenu from './dropdown/ThicknessDropdownMenu';

function DimensionsData({ handleChange }) {
  const { designDimensionsAndData } = useContext(DesignContext)
  
  return (
    <section className='grid grid-cols-aaa gap-6 w-full outline outline-black outline-2 rounded my-2 p-1'>
      <section className='grid'>
        <div>
          <p className='text-sm'>Length</p>
        </div>
        <div className='w-min grid'>
          <input
            type='number'
            className='w-[100px] outline outline-1 outline-black rounded pl-2 py-[2px] pr-1'
            value={designDimensionsAndData.length}
            onChange={handleChange}
            name='length'
            id='length'
          />
        </div>
      </section>
      <section className='grid'>
        <div>
          <p className='text-sm'>Width</p>
        </div>
        <div className='w-full'>
          <input
            type='number'
            className='w-[100px] outline outline-1 outline-black rounded pl-2 py-[2px] pr-1'
            value={designDimensionsAndData.width}
            onChange={handleChange}
            name='width'
            id='width'
          />
        </div>
      </section>
      <section className='grid'>
        <div>
          <p className='text-sm'>Thickness</p>
        </div>
        <div className='w-full'>
          <ThicknessDropdownMenu />
        </div>
      </section>
    </section>
  );
}

export default DimensionsData;
