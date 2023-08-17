import React from 'react';

function ColourData({
  designDimensionsAndData,
  handleColourAddChange,
  addNewColourToList,
}) {
  return (
    <section className=''>
      <div>
        <p>Customise Colours</p>
      </div>
      <div className='grid grid-flow-col mb-2'>
        <div>
          <p>Selected:</p>
        </div>
        <section className='grid grid-flow-col w-full'>
          {designDimensionsAndData.colours.forEach((colour, index) => {
            console.log('colour 1', colour);
            return (
              <div key={index}>
                <p className=''>{colour.toString}</p>
              </div>
            );
          })}
        </section>
      </div>
      <div className='grid grid-cols-rev w-full h-full gap-4'>
        <div className='w-full'>
          <input
            type='text'
            className='w-full'
            name='colourAddedByUser'
            id='colourAddedByUser'
            onChange={handleColourAddChange}
          />
        </div>
        <div className='w-min'>
          <button
            onClick={addNewColourToList}
            className='bg-slate-400 rounded w-full px-2'
          >
            Enter
          </button>
        </div>
      </div>
    </section>
  );
}

export default ColourData;
