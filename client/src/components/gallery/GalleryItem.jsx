import React from 'react';

function GalleryItem({ item }) {
  return (
    <section className='w-fit mx-auto px-4 py-8 grid justify-center shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]'>
      <div>
        <span>{item.name}</span>
      </div>
      <div className='grid justify-center mt-2 w-[200px]'>
        <img src={item.imageUrl} alt='design' />
        <div className='mt-1'>
          <p>{item.data}</p>
        </div>
      </div>
    </section>
  );
}

export default GalleryItem;
