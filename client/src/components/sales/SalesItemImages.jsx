import React from 'react';

function SalesItemImages({
  displayVideo,
  imagesNum,
  item,
  selectNextImg,
  selectVideo,
  selectPrevImg,
  openFullscreenDisplay
}) {
  return (
    <section className='grid grid-rows-rev lg:overflow-hidden lg:max-h-[500px] shadow-[rgba(0,_0,_0,_0.2)_0px_60px_40px_-7px] p-2 md:p-4 rounded-xl outline outline-1 outline-black'>
      {/* Images */}
      {displayVideo ? (
        <article className='grid outline outline-black outline-2 overflow-hidden rounded'>
          <div className='video-container'>
            <video id={'index'} className='video-player' controls muted>
              <source src={item.pageData.videoLinks} type='video/mp4' />
              Your browser does not support the video tag.
            </video>
          </div>
        </article>
      ) : (
        <div onClick={openFullscreenDisplay} className='outline outline-black outline-2 lg:overflow-hidden cursor-pointer rounded'>
          <img
            className='lg:overflow-hidden h-full object-fill w-full'
            src={item.pageData.images[imagesNum]}
            alt='design'
          />
        </div>
      )}

      {/* Buttons */}
      <section className='grid grid-flow-col gap-4 my-4 px-2 text-sm lg:text-lg xl:text-xl mb-2'>
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
            onClick={selectVideo}
            className='outline outline-2 outline-black rounded-xl py-2 w-full px-4 active:scale-95 no__highlights pink__marble__bg font-bold text-black hover:opacity-70'
          >
            See Video
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

export default SalesItemImages;
