import React from 'react';

function CtaHomeLinks({ navigateToPage }) {
  return (
    <section className='grid md:grid-cols-2 gap-4 text-xl'>
      <div className='mt-6 md:mt-2 w-full'>
        <button
          id='/gallery'
          onClick={navigateToPage}
          className='py-2 px-6 w-full font-bold outline-2 white__marble__bg hover:opacity-70 active:scale-95 outline-black outline rounded-xl no__highlights'
        >
          Gallery
        </button>
      </div>
      <div className='mt-6 md:mt-2'>
        <button
          id='/sales'
          onClick={navigateToPage}
          className='py-2 px-6 w-full font-bold outline-2 black__marble__bg hover:opacity-70 text-white active:scale-95 outline-black outline rounded-xl no__highlights'
        >
          Shop
        </button>
      </div>
    </section>
  );
}

export default CtaHomeLinks;
