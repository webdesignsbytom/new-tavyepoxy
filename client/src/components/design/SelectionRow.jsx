import React from 'react';

function SelectionRow({
  designDimensionsAndData,
  openFinishOptionsModal,
  openLegOptionsModal,
}) {
  return (
    <section className='grid grid-cols-2 outline gap-2 outline-black outline-2 rounded p-1 my-2'>
      {/* Finish */}
      <section className='grid'>
        <div>
          <h5 className='font-semibold'>Epoxy Finish</h5>
        </div>

        <div className='text-sm leading-5 h-full capitalize'>
          <p>{designDimensionsAndData.finish}</p>
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
          <h5 className='font-semibold'>Leg style</h5>
        </div>

        <div className='text-sm leading-5 h-full capitalize'>
          <p>{designDimensionsAndData.legs}</p>
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