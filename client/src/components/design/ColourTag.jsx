import React from 'react';

function ColourTag({ colour }) {
    console.log('colour 2', colour);

  return (
    <div>
      <span className='text-sm'>{colour}</span>
    </div>
  );
}

export default ColourTag;
