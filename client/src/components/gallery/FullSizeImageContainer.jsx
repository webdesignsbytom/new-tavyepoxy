import React from 'react';
// Icons
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { RxCross2 } from 'react-icons/rx';

function FullSizeImageContainer({
  closeFullscreenDisplay,
  item,
  imagesNum,
  selectPrevImg,
  selectNextImg,
}) {
  return (
    <section className='sticky z-50 top-2 left-0 px-4 py-8 h-screen w-full overflow-hidden'>
      <div className='grid relative outline outline-2 outline-black rounded bg-blue-200 w-full h-full'>
        {/* Close btn */}
        <section
          onClick={closeFullscreenDisplay}
          className='absolute top-4 right-4 cursor-pointer active:scale-95'
        >
          <RxCross2 size={35} />
        </section>
        {/* Image container */}
        <div className='overflow-hidden'>
          <img
            className='lg:overflow-hidden h-full object-contain w-full'
            src={item.pageData.images[imagesNum]}
            alt='design'
          />
        </div>
        {/* Arrows */}
        <section
          onClick={selectPrevImg}
          className='absolute p-2 top-1/2 z-50 cursor-pointer active:scale-95'
        >
          <div>
            <AiOutlineArrowLeft size={35} />
          </div>
        </section>
        <section
          onClick={selectNextImg}
          className='absolute p-2 top-1/2 right-0 z-50 cursor-pointer active:scale-95'
        >
          <div>
            <AiOutlineArrowRight size={35} />
          </div>
        </section>
      </div>
    </section>
  );
}

export default FullSizeImageContainer;
