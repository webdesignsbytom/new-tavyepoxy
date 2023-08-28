import React from 'react';
import { useNavigate } from 'react-router-dom';

function GalleryItem({ item }) {
  const navigate = useNavigate();

  const navigateToPage = (event) => {
    navigate(`/gallery/galleryItem/${item.url}`, { state: item });
  };

  return (
    <section
      onClick={navigateToPage}
      className='w-full lg:mx-4 cursor-pointer rounded-xl h-fit px-4 py-8 grid justify-center shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]'
    >
      <div className='mb-2 -mt-4'>
        <h6 className='font-semibold'>{item.name}</h6>
      </div>
      <div className='grid justify-center mt-2 leading-5'>
        <img
          className='max-h-[300px] w-full object-cover outline outline-1 outline-gray-400 rounded'
          src={item.imageUrl}
          alt='design'
        />
        <section className='px-4'>
          <div className='my-4'>
            <p className=''>{item.data}</p>
          </div>
          <div className='mb-4'>
            <p>
              <span className='font-semibold'>Colours:</span> {item.colours}
            </p>
          </div>
        </section>
        <div className='tooltip-text bg-black p-2 text-white text-center rounded tooltip-custom mt-2'>
          Click to see more!
        </div>
      </div>
    </section>
  );
}

export default GalleryItem;
