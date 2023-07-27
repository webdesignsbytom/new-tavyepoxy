import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// Components
import Navbar from '../../components/nav/Navbar';
// Context
import { ToggleContext } from '../../context/ToggleContext';
import SalesLinks from '../../components/sales/SalesLinks';

function ForSalePage() {
  const { setActiveNav } = useContext(ToggleContext);

  const navigate = useNavigate();

  useEffect(() => {
    setActiveNav('/sales');
  }, []);

  return (
    <div className='grid bg-gray-100 min-h-screen grid-rows-reg'>
      <Navbar />
      {/* Main */}
      <main className='grid h-full'>
        <div className='grid grid-rows-aa1 w-1/2 mx-auto'>
          <section>
            <article className='mt-8'>
              <div className='mb-4'>
                <h2 className='text-2xl pb-6 font-corgs font-medium border-b-2 border-solid border-black'>
                  Currently Available Products
                </h2>
                
              </div>
              <div className='grid gap-1'>
                <p>
                  <span className='font-semibold'>Our new range is availble now!</span> Made to be beautiful and affordable.
                </p>
                <p>
                  We dont produce to any schedual unless privately hired and we
                  dont tend to repeat stlyes. All products seen here we made
                  because we thought they looked beautiful and unique.{' '}
                </p>
                <p>
                  We are not happy that due to the massive increase in materials
                  in the UK we have to charge more than usual for these fine
                  products. They are worth it and we strive to make affordable
                  products where ever possible. This is a pursuit of craft and
                  not money.
                </p>
              </div>
            </article>
          </section>
          <SalesLinks />
          <section className='grid'>
            <div className='mt-6'>
              <h3 className='text-xl font-semibold'>Tables and Furniture For Sale</h3>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default ForSalePage;
