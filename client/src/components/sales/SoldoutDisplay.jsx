import React from 'react';
import { Link } from 'react-router-dom';

function SoldoutDisplay() {
  return (
    <section>
      <article>
        <div className='text-center my-2'>
          <p className='text-xl uppercase font-bold'>
            Currently sold out of all products!
          </p>
        </div>
        <div>
          <p>
            While this is great news for us. You may want to order a product or
            wait for the next production run..
          </p>
        </div>
        <div>
          You can order anything in a previous style we have made. You can see
          all these styles on our instagram. Some of our mot popular styles can
          be found on the Gallery page on this site.{' '}
        </div>
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
            to='/gallery'
          >
            Click here to use the design tool
          </Link>
        </div>
      </article>
    </section>
  );
}

export default SoldoutDisplay;
