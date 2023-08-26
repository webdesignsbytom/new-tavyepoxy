import React, { useContext, useState } from 'react';
import { ToggleContext } from '../../context/ToggleContext';
import ColoursDropdownMenu from './dropdown/ColoursDropdownMenu';
import ColourPicker from '../utils/ColourPicker';

function ColourData() {
  const {
    toggleColourPickerOpenClosed,
    toggleColourPicker,
    toggleResetColoursOpen
  } = useContext(ToggleContext);

  const [selectedColoursArr, setSelectedColoursArr] = useState([]);

  const ClearAllColours = () => {
    console.log('clearing all colours');
    toggleResetColoursOpen()
  };

  return (
    <section className='relative'>
      {toggleColourPicker && (
        <ColourPicker
          selectedColoursArr={selectedColoursArr}
          setSelectedColoursArr={setSelectedColoursArr}
        />
      )}
      <div>
        <p className='text-sm mb-1'>Customise Colours</p>
      </div>
      <section className='grid'>
        <ColoursDropdownMenu selectedColoursArr={selectedColoursArr} />
      </section>
      <div className='grid grid-cols-2 w-full h-full gap-1 mt-1'>
        <div className='w-full'>
          <button
            onClick={toggleColourPickerOpenClosed}
            className='bg-slate-400 rounded w-full px-2'
          >
            Picker
          </button>
        </div>
        <div className='w-full'>
          <button
            onClick={ClearAllColours}
            className='bg-red-400 rounded w-full px-2'
          >
            Clear
          </button>
        </div>
      </div>
    </section>
  );
}

export default ColourData;
