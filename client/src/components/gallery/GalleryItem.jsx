import React from 'react';

function GalleryItem({ item }) {
  return (
    <div className='w-fit mx-auto px-4 py-8 grid justify-center shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]'>
      <div>
        <span>{item.name}</span>
      </div>
      <div className='grid justify-center mt-2'>
        <img src={item.imageUrl} alt='design' />
      </div>
    </div>
  );
}

export default GalleryItem;
