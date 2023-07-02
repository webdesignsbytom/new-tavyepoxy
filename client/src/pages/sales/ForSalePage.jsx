import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// Components
import Navbar from '../../components/nav/Navbar';
// Context
import { ToggleContext } from '../../context/ToggleContext';

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
        <div className='grid grid-rows-reg w-1/2 mx-auto'>
          <section>
            <article className='mt-8'>
              <div className='mb-4'>
                <h2 className='text-2xl font-corgs font-medium'>
                  Currently Available Products
                </h2>
              </div>
              <div className='grid gap-1'>
                <p>
                  We dont produce to any schedual unless privately hired and we
                  dont tend to repeat stlyes. All products seen here we made
                  because we thought they looked beautiful and unique.{' '}
                </p>
                <p>
                  We are aiming to produce one new coffee table a week to sell
                  at affordable prices.
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
          <section className='grid'>
            <div className='mt-6'>
              <h3 className='text-xl font-semibold'>Tables and Furniture</h3>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default ForSalePage;
