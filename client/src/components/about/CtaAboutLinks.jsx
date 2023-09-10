import React from 'react';

function CtaAboutLinks({ navigateToPage }) {
  return (
    <section className='grid px-2 lg:px-0 lg:w-1/2 gap-4 mt-10 text-sm lg:text-lg xl:text-xl font-bold'>
      <div className='grid grid-cols-3 gap-1 w-full'>
        <div className='grid w-full'>
          <button
            id='/gallery'
            onClick={navigateToPage}
            className='outline outline-2 w-full outline-black rounded-xl py-2 px-4 white__marble__bg active:scale-95 no__highlights hover:opacity-70'
          >
            Gallery
          </button>
        </div>
        <div className='grid w-full'>
          <button
            id='/materials'
            onClick={navigateToPage}
            className='outline outline-2 hover:opacity-70 text-white black__marble__bg w-full outline-black rounded-xl py-2 px-4 active:scale-95 no__highlights'
          >
            Materials
          </button>
        </div>
        <div className='grid w-full'>
          <button
            id='/contact'
            onClick={navigateToPage}
            className='outline outline-2 hover:opacity-70 w-full pink__marble__bg outline-black rounded-xl py-2 px-4 active:scale-95 no__highlights'
          >
            Contact
          </button>
        </div>
      </div>
    </section>
  );
}

export default CtaAboutLinks;
