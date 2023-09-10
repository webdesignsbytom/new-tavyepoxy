import React from 'react';

function GalleryImageCarousel({ images }) {
  return (
    <section className='grid mb-2 border-t-2 border-solid border-black lg:h-[75px]'>
      <div className='grid grid-flow-col px-2'>
        {images.map((image, index) => {
          return (
            <div
              key={index}
              className='w-1/2 shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]rounded '
            >
              <img
                className='lg:overflow-hidden h-full object-fill w-full'
                src={image}
                alt='design'
              />
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default GalleryImageCarousel;
