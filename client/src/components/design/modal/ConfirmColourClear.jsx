import React, { useContext } from 'react';
// Context
import { ToggleContext } from '../../../context/ToggleContext';
import { DesignContext } from '../../../context/DesignContext';

function ConfirmColourClear() {
  const { toggleResetColoursClosed } = useContext(ToggleContext);
  const { designDimensionsAndData, setDesignDimensionsAndData, setSelectedColoursArr } =
    useContext(DesignContext);

  const clearColourList = () => {
    setDesignDimensionsAndData({
      ...designDimensionsAndData,
      colours: []
    })

    setSelectedColoursArr([])
    toggleResetColoursClosed()
  };

  return (
    <section className='grid absolute z-40 p-2 outline outline-2 min-w-[250px] outline-black rounded bg-slate-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
      <article className='text-center'>
        <div>
          <span className='px-1'>Confirm Clear Colour List</span>
        </div>
        <div className='py-2'>
          <span className='font-semibold'>Are you sure?</span>
        </div>

        <section className='grid mt-2'>
          <div className='grid grid-cols-2 gap-2'>
            <div>
              <button
                onClick={toggleResetColoursClosed}
                className='outline outline-black outline-1 w-full rounded p-2 bg-red-400 hover:bg-red-500 active:scale-95'
              >
                Cancel
              </button>
            </div>
            <div>
              <button
                onClick={clearColourList}
                className='outline outline-black outline-1 w-full rounded p-2 bg-slate-400 hover:bg-slate-500 active:scale-95'
              >
                Confirm
              </button>
            </div>
          </div>
        </section>
      </article>
    </section>
  );
}

export default ConfirmColourClear;
