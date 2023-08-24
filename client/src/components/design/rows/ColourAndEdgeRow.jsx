import React from 'react';
import ColourData from '../ColourData';
import EdgeTypeData from '../EdgeTypeData';

function ColourAndEdgeRow({
  handleColourAddChange,
  handleEdgeTypeChange,
}) {
  return (
    <section className='outline gap-2 outline-black outline-2 rounded p-1 my-2 grid grid-cols-2'>
      <ColourData
        handleColourAddChange={handleColourAddChange}
      />
      <EdgeTypeData handleEdgeTypeChange={handleEdgeTypeChange} />
    </section>
  );
}

export default ColourAndEdgeRow;
