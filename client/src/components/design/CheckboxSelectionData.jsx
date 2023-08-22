import React from 'react';

function CheckboxSelectionData({
  designDimensionsAndData,
  handleCheckboxChange,
}) {
  return (
    <section className='outline gap-2 outline-black outline-2 rounded p-1 my-2'>
      <section className='grid grid-cols-aaa justify-between px-1'>
        <div className='w-fit'>
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
        <div className='w-fit'>
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
        <div className='w-fit'>
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
