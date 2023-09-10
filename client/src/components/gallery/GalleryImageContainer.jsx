import React from 'react';

function GalleryImageContainer({
  item,
  selectPrevImg,
  imagesNum,
  selectNextImg,
}) {

  return (
    <section className='grid grid-rows-rev lg:overflow-hidden lg:max-h-[500px] shadow-[rgba(0,_0,_0,_0.2)_0px_60px_40px_-7px] p-4 rounded-xl outline outline-1 outline-black'>
      <div className='outline outline-black outline-2 lg:overflow-hidden'>
        <img
          className='lg:overflow-hidden h-full object-fill w-full'
          src={item.pageData.images[imagesNum]}
          alt='design'
        />
      </div>

      {/* Buttons */}
      <section className='grid grid-flow-col gap-4 my-4 px-2 text-xl mb-2'>
        <div>
          <button
            onClick={selectPrevImg}
            className='outline outline-2 outline-black rounded-xl py-2 w-full px-4 active:scale-95 no__highlights white__marble__bg font-bold hover:opacity-70'
          >
            Prev Image
          </button>
        </div>
        <div>
          <button
            onClick={selectNextImg}
            className='outline outline-2 outline-black rounded-xl py-2 w-full px-4 active:scale-95 no__highlights black__marble__bg font-bold text-white hover:opacity-70'
          >
            Next Image
          </button>
        </div>
      </section>
    </section>
  );
}

export default GalleryImageContainer;
