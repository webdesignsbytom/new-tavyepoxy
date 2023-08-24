import React from 'react';
import MaterialDropdownMenu from './dropdown/MaterialDropdownMenu';

function MaterialsData() {
  return (
    <section className='grid grid-cols-reg outline gap-2 outline-black outline-2 rounded p-1'>
      <div className='grid items-center'>
        <h4 className='text-sm'>Material:</h4>
      </div>

      <div className='grid h-full'>
        <MaterialDropdownMenu />
      </div>
      
    </section>
  );
}

export default MaterialsData;
