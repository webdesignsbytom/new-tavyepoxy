import React, { useContext, useState } from 'react';
// Data
import { ThicknessOptions } from '../../../utils/data/MaterialData';
// Context
import { DesignContext } from '../../../context/DesignContext';
// Icons
import { AiOutlineEnter } from 'react-icons/ai';

function ThicknessDropdownMenu() {
  const {
    setDesignDimensionsAndData,
    designDimensionsAndData,
    selectedThickness,
    setSelectedThickness,
  } = useContext(DesignContext);

  const [availableThicknesses] = useState(ThicknessOptions);

  const [toggleThicknessDropdownMenu, setToggleThicknessDropdownMenu] =
    useState(false);
  const [enterCustomThicknessData, setEnterCustomThicknessData] = useState('');

  const toggleMenuOpenClosed = () => {
    setToggleThicknessDropdownMenu(!toggleThicknessDropdownMenu);
  };

  const submitCustomThickness = () => {
    if (enterCustomThicknessData === '') {
      return;
    } else {
      setSelectedThickness({
        id: 'custom',
        value: enterCustomThicknessData,
        label: enterCustomThicknessData,
      });
    }

    setToggleThicknessDropdownMenu(false);
    setDesignDimensionsAndData({
      ...designDimensionsAndData,
      thickness: enterCustomThicknessData,
    });
  };

  const handleCustomChange = (event) => {
    const { value } = event.target;

    setEnterCustomThicknessData(value);
  };

  const handleSelectThicknessOption = (option) => {
    console.log('option selected', option);
    setSelectedThickness({ label: option.value });

    setToggleThicknessDropdownMenu(false);

    setDesignDimensionsAndData({
      ...designDimensionsAndData,
      thickness: option.value,
    });
  };

  console.log('designDimensionsAndData', designDimensionsAndData);
  return (
    <section className='relative'>
      <article
        className='grid grid-cols-rev outline outline-1 outline-black rounded bg-gray-100'
        onClick={toggleMenuOpenClosed}
      >
        <div className='grid items-center text-sm pl-2 grid-flow-col'>
          <span>{selectedThickness.label} </span>
          <span>mm</span>
        </div>
        <section className='grid justify-end'>
          <div className='bg-slate-400 cursor-pointer w-[40px] grid items-center justify-center'>
            <span className='no__highlights text-xl'>⮟</span>
          </div>
        </section>
      </article>
      {toggleThicknessDropdownMenu && (
        <section className='outline outline-1 outline-black rounded absolute z-10 bg-white w-full mt-1 overflow-hidden'>
          {availableThicknesses.map((option, index) => {
            console.log('option', option);
            return (
              <article
                key={index}
                id={option.value}
                name={option.value}
                onClick={() => handleSelectThicknessOption(option)}
                className='bg-white p-1 grid grid-cols-rev hover:bg-blue-500 cursor-pointer'
              >
                <div className='grid items-center pl-2'>
                  <p className='text-xs'>{option.label}</p>
                </div>
              </article>
            );
          })}
          <article
            id='custom_material'
            name='custom_material'
            className='bg-white p-1 grid grid-cols-rev hover:bg-blue-500 cursor-pointer'
          >
            <section className='grid relative'>
              <div className='w-full'>
                <input
                  type='text'
                  onChange={handleCustomChange}
                  placeholder='Enter Custom...'
                  className='outline-1 outline outline-black rounded w-full p-1'
                />
              </div>
              <div className='grid absolute right-0 h-full p-[2px]'>
                <button
                  onClick={submitCustomThickness}
                  className='bg-slate-400 text-sm px-1 outline outline-black outline-1 rounded active:scale-95 active:duration-200'
                >
                  Submit
                </button>
              </div>
            </section>
          </article>
        </section>
      )}
    </section>
  );
}

export default ThicknessDropdownMenu;
