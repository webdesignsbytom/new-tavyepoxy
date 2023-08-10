import React from 'react';

function ColourTag({ colour }) {
  console.log('colour 2', colour);

  return (
    <div>
      <p className='text-sm'>{colour}</p>
    </div>
  );
}

export default ColourTag;
