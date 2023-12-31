import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// Components
import SalesLinks from '../../components/sales/SalesLinks';
import AvailableItemsSection from '../../components/sales/AvailableItemsSection';
import Navbar from '../../components/nav/Navbar';
import FooterComponent from '../../components/footer/FooterComponent';
// Context
import { ToggleContext } from '../../context/ToggleContext';
import CtaInternalLinks from '../../components/sales/CtaInternalLinks';

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
        <div className='grid grid-rows-aa1 w-full px-6 lg:px-0 '>
          <section className='grid lg:w-1/2 mx-auto'>
            <article className='mt-8 text-center'>
              <div className='mb-4'>
                <h2 className='text-2xl pb-6 font-corgs font-medium border-b-2 border-solid border-black'>
                  Currently Available Products
                </h2>
              </div>
              <div className='grid gap-1'>
                <p>
                  <span className='font-semibold'>
                    Our new range is available now!
                  </span>{' '}
                  Made to be beautiful and affordable.
                </p>
                <p>
                  We don't produce to any schedule unless privately hired and we
                  don't tend to repeat styles. All products seen here we made
                  because we thought they looked beautiful and unique.{' '}
                </p>
              </div>
            </article>
          </section>

          <section className='grid lg:w-3/4 mx-auto'>
            <AvailableItemsSection />
          </section>

          <section className='grid lg:w-3/4 mx-auto'>
            <SalesLinks />
            <section>
              <p>
                We are not happy that due to the massive increase in materials
                in the UK we have to charge more than usual for these fine
                products. They are worth it and we strive to make affordable
                products where ever possible. This is a pursuit of craft and not
                money.
              </p>
            </section>
            <CtaInternalLinks />
          </section>
        </div>
      </main>
      <FooterComponent />
    </div>
  );
}

export default ForSalePage;
