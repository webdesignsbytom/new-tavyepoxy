import React, { useContext, useState } from 'react';
import { ToggleContext } from '../../context/ToggleContext';
import ColoursDropdownMenu from './dropdown/ColoursDropdownMenu';
import ColourPicker from '../utils/ColourPicker';

function ColourData({
  designDimensionsAndData,
  designColourList,
  setDesignColourList,
}) {
  const { toggleColourPickerOpenClosed, toggleColourPicker } = useContext(ToggleContext);

  const [selectedColoursArr, setSelectedColoursArr] = useState([])

  const ClearAllColours = () => {
    console.log('clearing all colours');
  };

  return (
    <section className='relative'>
      {toggleColourPicker && <ColourPicker selectedColoursArr={selectedColoursArr} setSelectedColoursArr={setSelectedColoursArr} />}
      <div>
        <p className='text-sm mb-1'>Customise Colours</p>
      </div>
      <section className='grid'>
        <ColoursDropdownMenu selectedColoursArr={selectedColoursArr} />
      </section>
      <div className='grid grid-cols-2 w-full h-full gap-4 mt-1'>
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
            className='bg-slate-400 rounded w-full px-2'
          >
            Clear
          </button>
        </div>
      </div>
    </section>
  );
}

export default ColourData;
