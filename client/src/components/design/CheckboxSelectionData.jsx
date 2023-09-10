import React, { useContext } from 'react';
// Context
import { DesignContext } from '../../context/DesignContext';

function CheckboxSelectionData({ handleCheckboxChange }) {
  const { designDimensionsAndData } = useContext(DesignContext);

  return (
    <section className='outline gap-2 outline-black outline-2 rounded p-1 my-2'>
      <section className='grid gap-1 md:gap-0 md:grid-cols-aaa justify-center md:justify-between px-1 py-2 md:py-0'>
        <div className='md:w-fit'>
          <div className='text-center'>
            <p className='text-sm'>Protective Layer</p>
          </div>
          <div className='grid justify-center'>
            <input
              id='protection'
              name='protection'
              type='checkbox'
              checked={designDimensionsAndData.protection}
              onChange={handleCheckboxChange}
            />
          </div>
        </div>
        <div className='md:w-fit'>
          <div className='text-center'>
            <p className='text-sm'>Rough Stone</p>
          </div>
          <div className='grid justify-center'>
            <input
              id='stone_edge'
              name='stone_edge'
              type='checkbox'
              checked={designDimensionsAndData.stone_edge}
              onChange={handleCheckboxChange}
            />
          </div>
        </div>
        <div className='md:w-fit'>
          <div className='text-center'>
            <p className='text-sm'>Matching Coasters x4</p>
          </div>
          <div className='grid justify-center'>
            <input
              id='coasters'
              name='coasters'
              type='checkbox'
              checked={designDimensionsAndData.coasters}
              onChange={handleCheckboxChange}
            />
          </div>
        </div>
      </section>
    </section>
  );
}

export default CheckboxSelectionData;
