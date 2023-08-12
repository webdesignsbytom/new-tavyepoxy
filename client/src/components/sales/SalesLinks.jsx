import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
// Context
import { ToggleContext } from '../../context/ToggleContext';
import CtaSalesLinks from './CtaSalesLinks';

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
        <CtaSalesLinks navigateToPage={navigateToPage} />
      </article>
    </section>
  );
}

export default SalesLinks;
