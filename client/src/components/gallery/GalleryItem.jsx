import React from 'react';
import { useNavigate } from 'react-router-dom';

function GalleryItem({ item }) {
  const navigate = useNavigate();

  const navigateToPage = (event) => {
    navigate(`/gallery/galleryItem/${item.url}`, { state: item });
  };

  const paragraphs = item.desc
    .split('<br /><br />')
    .map((paragraph, index) => (
      <p
        className='pt-2'
        key={index}
        dangerouslySetInnerHTML={{ __html: paragraph }}
      />
    ));

  return (
    <section
      onClick={navigateToPage}
      className='w-full lg:mx-4 cursor-pointer rounded-xl h-full px-4 py-8 grid justify-center shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]'
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
            <p className=''>
              <div>
                <p>{item.shortDesc}</p>
              </div>
            </p>
          </div>
          <div className='mb-4'>
            <p>
              <span className='font-semibold'>Colours:</span> {item.colours}
            </p>
          </div>
        </section>
        <section className='grid items-end'>
          <div className='tooltip-text h-[50px] grid items-center bg-black p-2 text-white text-center rounded tooltip-custom mt-2'>
            <p>Click to see more!</p>
          </div>
        </section>
      </div>
    </section>
  );
}

export default GalleryItem;
