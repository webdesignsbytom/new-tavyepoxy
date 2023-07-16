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
      className='w-fit cursor-pointer hover:scale-125 duration-300 mx-auto h-fit px-4 py-8 grid justify-center shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]'
    >
      <div className='mb-2'>
        <h6 className='font-semibold'>{item.name}</h6>
      </div>
      <div className='grid justify-center mt-2 w-[200px] leading-5'>
        <img className='max-h-[500px]' src={item.imageUrl} alt='design' />
        <div className='mt-1'>
          <p className=' mb-2'>{item.data}</p>
        </div>
        <div>
          <p>
            <span className='font-semibold'>Colours:</span> {item.colours}
          </p>
        </div>
        <div class='tooltip-text bg-black p-2 text-white text-center rounded tooltip-custom mt-2'>
          Click to see more!
        </div>
      </div>
    </section>
  );
}

export default GalleryItem;
