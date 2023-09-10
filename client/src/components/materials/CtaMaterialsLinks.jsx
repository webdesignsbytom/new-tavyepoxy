import React from 'react';

function CtaMaterialsLinks({ navigateToPage }) {
  return (
    <section className='grid px-4 lg:px-0 w-full gap-4 mx-auto mt-10 text-sm lg:text-lg xl:text-xl font-bold'>
      <div className='grid grid-cols-3 gap-4 w-full mx-auto'>
        <div className='grid w-full'>
          <button
            id='/gallery'
            onClick={navigateToPage}
            className='outline outline-2 w-full no__highlights hover:opacity-70 white__marble__bg active:scale-95 outline-black rounded-xl py-2 px-4'
          >
            Gallery
          </button>
        </div>
        <div className='grid w-full'>
          <button
            id='/sales'
            onClick={navigateToPage}
            className='outline outline-2 hover:opacity-70 text-white black__marble__bg w-full outline-black rounded-xl py-2 px-4 active:scale-95 no__highlights'
          >
            Shop
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

export default CtaMaterialsLinks;
