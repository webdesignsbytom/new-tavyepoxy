import React, { useContext, useState } from 'react';
// Context
import { ToggleContext } from '../../context/ToggleContext';
import { DesignContext } from '../../context/DesignContext';
// Colour picker
import { SketchPicker } from 'react-color';
import { RxCross2 } from 'react-icons/rx';

function ColourPicker() {
  const { toggleColourPickerOpenClosed } = useContext(ToggleContext);
  const { selectedColoursArr, setSelectedColoursArr } =
    useContext(DesignContext);

  const [currentColour, setCurrentColour] = useState({
    hex: '#ff0000',
  });

  const setNewColour = (event) => {
    let newId = selectedColoursArr.length;
    let value = currentColour.hex;
    let label = currentColour.hex;

    let newObj = {
      id: newId,
      value: value,
      label: label,
    };

    setSelectedColoursArr([...selectedColoursArr, newObj]);
  };

  const closeColourPicker = () => {
    toggleColourPickerOpenClosed();
  };

  const handleChangeComplete = (color) => {
    setCurrentColour({ hex: color.hex, rgb: color.rgb, hsl: color.hsl });
  };

  return (
    <div className='z-10 -top-40 bg-white border-2 border-black border-solid dark:border-white dark:bg-black rounded p-1 absolute cursor-pointer dark:text-gray-100'>
      <div className='flex justify-end my-1'>
        <RxCross2 onClick={closeColourPicker} />
      </div>
      <SketchPicker color={currentColour.hex} onChange={handleChangeComplete} />
      <div className='flex justify-center my-2'>
        <button
          onClick={setNewColour}
          className={`py-1 px-3 dark:outline-gray-100 dark:text-gray-100 outline outline-black outline-1 rounded-lg hover:bg-red-500 active:scale-95`}
        >
          SET COLOUR
        </button>
      </div>
    </div>
  );
}

export default ColourPicker;
