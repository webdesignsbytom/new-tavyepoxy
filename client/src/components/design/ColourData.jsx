import React, { useContext } from 'react';
// Context
import { ToggleContext } from '../../context/ToggleContext';
// Components
import ColoursDropdownMenu from './dropdown/ColoursDropdownMenu';
import ColourPicker from '../utils/ColourPicker';

function ColourData() {
  const {
    toggleColourPickerOpenClosed,
    toggleColourPicker,
    toggleResetColoursOpen,
  } = useContext(ToggleContext);

  const ClearAllColours = () => {
    toggleResetColoursOpen();
  };

  return (
    <section className='relative'>
      {toggleColourPicker && <ColourPicker />}
      <div>
        <p className='text-sm mb-1'>Customise Colours</p>
      </div>
      <section className='grid'>
        <ColoursDropdownMenu />
      </section>
      <div className='grid grid-cols-2 w-full h-full gap-1 mt-1'>
        <div className='w-full'>
          <button
            onClick={toggleColourPickerOpenClosed}
            className='bg-slate-400 rounded w-full px-2 outline outline-1 outline-black hover:bg-slate-500 active:scale-95'
          >
            Picker
          </button>
        </div>
        <div className='w-full'>
          <button
            onClick={ClearAllColours}
            className='bg-red-400 rounded w-full px-2 outline outline-1 outline-black hover:bg-red-500 active:scale-95'
          >
            Clear
          </button>
        </div>
      </div>
    </section>
  );
}

export default ColourData;
