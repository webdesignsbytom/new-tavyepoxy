import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
// Context
import { ToggleContext } from '../../context/ToggleContext';

function SalesLinks() {
  const { setActiveNav } = useContext(ToggleContext);

  const navigate = useNavigate();

  const navigateToPage = (event) => {
    const { id } = event.target;
    setActiveNav(id);
    navigate(`${id}`);
  };

  return (
    <section className='mt-6 mb-2'>
      <article className='outline outline-black outline-2 rounded-xl p-4 bg-gray-200'>
        <div className='text-center mb-2'>
          <h3 className='text-xl font-semibold'>
            How to purchase a table or make a customer order
          </h3>
        </div>
        <div>
          <p>
            We currently cannot accept online payments through our website.{' '}
            <br />
            However we can be reached over the phone or by email to take bank
            transfers or paypal. We can also offer purchases through sales
            websites we use such as ebay and Etsy. Below you can find how to
            contact us or see our available products. Due to large fees through
            payment services we may include a service charge through outside
            sites.
          </p>
        </div>
        <section className='grid grid-cols-3 items-center h-full w-full gap-4 mb-2 mt-4'>
          <div>
            <button
              id='/contact'
              onClick={navigateToPage}
              className='py-2 w-full px-6 font-semibold outline-2 bg-yellow-400 hover:bg-yellow-500 active:scale-95 outline-black outline rounded-xl'
            >
              Contact
            </button>
          </div>
          <div>
          <a href='https://www.ebay.co.uk' className='grid text-center py-2 w-full px-6 font-semibold outline-2 bg-yellow-400 hover:bg-yellow-500 active:scale-95 outline-black outline rounded-xl'>
              eBay
            </a>
          </div>
          <div>
            <a href='https://www.etsy.com/tavyepoxy' className='grid text-center py-2 w-full px-6 font-semibold outline-2 bg-yellow-400 hover:bg-yellow-500 active:scale-95 outline-black outline rounded-xl'>
              Etsy
            </a>
          </div>
        </section>
      </article>
    </section>
  );
}

export default SalesLinks;
