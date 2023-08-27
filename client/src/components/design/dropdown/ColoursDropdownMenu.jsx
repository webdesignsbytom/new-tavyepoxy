import React, { useContext, useState } from 'react';
// Context
import { DesignContext } from '../../../context/DesignContext';
// Icons
import { RxCross2 } from 'react-icons/rx';

function ColoursDropdownMenu() {
  const { selectedColoursArr, designDimensionsAndData, setDesignDimensionsAndData, setSelectedColoursArr } = useContext(DesignContext);

  const [toggleColoursList, setToggleColoursList] = useState(false);

  const toggleMenuOpenClosed = () => {
    setToggleColoursList(!toggleColoursList);
  };

  const removeColourFromList = (option) => {
    console.log('option', option);
    const designColourArray = designDimensionsAndData.ColoursDropdownMenu
    console.log('designColourArray', designColourArray);
    designColourArray.find(e => e.id === option.id)
  };

  return (
    <section className='relative'>
      <article
        className='grid grid-cols-rev outline outline-2 outline-black rounded bg-gray-100'
        onClick={toggleMenuOpenClosed}
      >
        <div className='grid items-center text-sm pl-2'>
          <span>Selected Colours</span>
        </div>
        <section className='grid justify-end'>
          <div className='bg-slate-400 cursor-pointer w-[40px] grid items-center justify-center'>
            <span className='no__highlights text-xl'>⮟</span>
          </div>
        </section>
      </article>
      {toggleColoursList && (
        <section className='outline outline-2 outline-black rounded absolute bg-white w-full mt-1 overflow-hidden max-h-[200px] overflow-y-scroll'>
          {selectedColoursArr.map((option, index) => {
            console.log('option', option);
            return (
              <article
                key={index}
                id={option.value}
                name={option.value}
                className='bg-white p-1 grid grid-cols-rev hover:bg-blue-500 cursor-pointer'
              >
                <div className='grid items-center pl-2'>
                  <p className='text-xs'>{option.label}</p>
                </div>
                <section className='grid grid-cols-2'>
                  <div className='pr-2'>
                    <div
                      style={{ backgroundColor: option.hex || option.value }}
                      className={`h-[18px] w-[18px] outline outline-1 outline-black`}
                    ></div>
                  </div>
                  <div>
                    <RxCross2 onClick={() => removeColourFromList(option)} />
                  </div>
                </section>
              </article>
            );
          })}
        </section>
      )}
    </section>
  );
}

export default ColoursDropdownMenu;
