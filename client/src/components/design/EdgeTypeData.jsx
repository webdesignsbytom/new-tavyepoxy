import React from 'react';
import EdgeDropdownMenu from './EdgeDropdownMenu';

function EdgeTypeData({ handleEdgeTypeChange }) {
  return (
    <section>
      <div>
        <p>Edges and routing</p>
      </div>

      <div>
        <EdgeDropdownMenu handleEdgeTypeChange={handleEdgeTypeChange} />
      </div>
    </section>
  );
}

export default EdgeTypeData;
