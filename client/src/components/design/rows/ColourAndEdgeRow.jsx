import React from 'react';
import ColourData from '../ColourData';
import EdgeTypeData from '../EdgeTypeData';

function ColourAndEdgeRow({
  designDimensionsAndData,
  handleColourAddChange,
  handleEdgeTypeChange,
  designColourList,
  setDesignColourList,
}) {
  return (
    <section className='outline gap-2 outline-black outline-2 rounded p-1 my-2 grid grid-cols-2'>
      <ColourData
        designDimensionsAndData={designDimensionsAndData}
        handleColourAddChange={handleColourAddChange}
        designColourList={designColourList}
        setDesignColourList={setDesignColourList}
      />
      <EdgeTypeData handleEdgeTypeChange={handleEdgeTypeChange} />
    </section>
  );
}

export default ColourAndEdgeRow;
