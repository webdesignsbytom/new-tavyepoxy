import React from 'react';

function CtaSalesLinks({ navigateToPage }) {
  return (
    <section className='grid grid-cols-3 items-center h-full w-full gap-4 mb-2 mt-4 text-xl'>
      <div>
        <button
          id='/contact'
          onClick={navigateToPage}
          className='py-2 px-6 font-bold outline-2 w-full no__highlights hover:opacity-70 white__marble__bg active:scale-95 outline-black outline rounded-xl'
        >
          Contact
        </button>
      </div>
      <div>
        <a
          href='https://www.ebay.co.uk'
          className='grid text-center py-2 w-full px-6 font-bold outline-2 no__highlights hover:opacity-70 text-white black__marble__bg active:scale-95 outline-black outline rounded-xl'
        >
          eBay
        </a>
      </div>
      <div>
        <a
          href='https://www.etsy.com/uk/shop/TavyEpoxy'
          className='grid text-center py-2 w-full px-6 font-bold outline-2 no__highlights hover:opacity-70 pink__marble__bg active:scale-95 outline-black outline rounded-xl'
        >
          Etsy
        </a>
      </div>
    </section>
  );
}

export default CtaSalesLinks;
