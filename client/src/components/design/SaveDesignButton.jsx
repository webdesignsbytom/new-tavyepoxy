import React from 'react';

function SaveDesignButton() {
  return (
    <section className='grid grid-rows-2 gap-1'>
      <div className='grid h-full'>
        <button className='outline outline-black outline-2 rounded py-1 px-2 bg-red-400'>
          Reset
        </button>
      </div>
      <div className='grid h-full'>
        <button className='outline outline-black outline-2 rounded py-1 px-2 bg-slate-400'>
          Save
        </button>
      </div>
    </section>
  );
}

export default SaveDesignButton;
