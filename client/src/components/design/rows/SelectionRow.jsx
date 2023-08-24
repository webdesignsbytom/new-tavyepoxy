import React, { useContext } from 'react';
// Context
import { DesignContext } from '../../../context/DesignContext';

function SelectionRow({
  openFinishOptionsModal,
  openLegOptionsModal,
}) {
  const { designDimensionsAndData } = useContext(DesignContext)

  return (
    <section className='grid grid-cols-2 outline gap-2 outline-black outline-2 rounded p-1 my-2 '>
      {/* Finish */}
      <section className='grid'>
        <div>
          <h5 className='font-semibold text-sm'>Epoxy Finish</h5>
        </div>

        <div className='text-sm leading-5 h-full capitalize'>
          <p className='text-sm'>{designDimensionsAndData.finish}</p>
        </div>

        <div className='w-full grid items-end'>
          <button
            onClick={openFinishOptionsModal}
            className='py-2 px-4 w-full bg-slate-400 rounded h-fit font-semibold'
          >
            View Finish Options
          </button>
        </div>
      </section>
      {/* Legs */}
      <section className='grid'>
        <div>
          <h5 className='font-semibold text-sm'>Leg style</h5>
        </div>

        <div className='text-sm leading-5 h-full capitalize'>
          <p className='text-sm'>{designDimensionsAndData.legs}</p>
        </div>

        <div className='w-full grid items-end'>
          <button
            onClick={openLegOptionsModal}
            className='py-2 px-4 w-full bg-slate-400 rounded h-fit font-semibold'
          >
            View Leg Options
          </button>
        </div>
      </section>
    </section>
  );
}

export default SelectionRow;
