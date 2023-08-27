import React, { useContext } from 'react';
// Context
import { ToggleContext } from '../../context/ToggleContext';

function SaveDesignButton() {
  const { toggleResetAllOpen } = useContext(ToggleContext)
  return (
    <section className='grid grid-rows-2 gap-1'>
      <div className='grid h-full'>
        <button onClick={toggleResetAllOpen} className='outline outline-black outline-1 rounded py-1 px-2 bg-red-400 hover:bg-red-500 active:scale-95'>
          Reset
        </button>
      </div>
      <div className='grid h-full'>
        <button className='outline outline-black outline-1 rounded py-1 px-2 bg-slate-400 hover:bg-slate-500 active:scale-95'>
          Save
        </button>
      </div>
    </section>
  );
}

export default SaveDesignButton;
