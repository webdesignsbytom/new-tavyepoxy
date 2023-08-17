import React from 'react';

function DimensionsData({ designDimensionsAndData, handleChange }) {
  return (
    <section className='grid grid-cols-aaa gap-6 w-full outline outline-black outline-2 rounded my-2 p-1'>
      <section className='grid'>
        <div>
          <p>Length</p>
        </div>
        <div className='w-min grid'>
          <input
            type='number'
            className='w-[100px]'
            value={designDimensionsAndData.length}
            onChange={handleChange}
            name='length'
            id='length'
          />
        </div>
      </section>
      <section className='grid'>
        <div>
          <p>Width</p>
        </div>
        <div className='w-full'>
          <input
            type='number'
            className='w-[100px]'
            value={designDimensionsAndData.width}
            onChange={handleChange}
            name='width'
            id='width'
          />
        </div>
      </section>
      <section className='grid'>
        <div>
          <p>Thickness</p>
        </div>
        <div className='w-full'>
          <select
            id='thickness'
            name='thickness'
            onChange={handleChange}
            value={designDimensionsAndData.thickness} // Corrected this line
            required
          >
            <option value='25'>25mm (Standard)</option>
            <option value='18'>18mm</option>
            <option value='35'>35mm</option>
            <option value='custom'>Custom</option>
          </select>
        </div>
      </section>
    </section>
  );
}

export default DimensionsData;
