import React from 'react';
import { Link } from 'react-router-dom';

function CtaInternalLinks() {
  return (
    <section>
      <div className='my-4'>
        <Link
          className='grid text-center py-2 w-full px-6 font-bold outline-2 no__highlights hover:opacity-70 text-white black__marble__bg active:scale-95 outline-black outline rounded-xl'
          to='/gallery'
        >
          Click here to view the gallery
        </Link>
      </div>
      <div className='my-4'>
        <Link
          className='grid text-center py-2 w-full px-6 font-bold outline-2 no__highlights hover:opacity-70 text-white black__marble__bg active:scale-95 outline-black outline rounded-xl'
          to='/design'
        >
          Click here to use the design tool
        </Link>
      </div>
    </section>
  );
}

export default CtaInternalLinks;
