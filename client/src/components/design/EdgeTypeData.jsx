import React from 'react';
import EdgeDropdownMenu from './EdgeDropdownMenu';

function EdgeTypeData({ handleEdgeTypeChange }) {
  return (
    <section className='grid grid-rows-rev'>
      <div>
        <p className='text-sm'>Edges and routing</p>
      </div>

      <div>
        <EdgeDropdownMenu handleEdgeTypeChange={handleEdgeTypeChange} />
      </div>
    </section>
  );
}

export default EdgeTypeData;
