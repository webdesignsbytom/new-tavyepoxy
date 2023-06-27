import React, { useContext, useEffect } from 'react';
// Components
import Navbar from '../../components/nav/Navbar';
// Context
import { ToggleContext } from '../../context/ToggleContext';
// Images
import BannerImage from '../../assets/images/epoxy/bg1.png';

function HomePage() {
  const { setActiveNav } = useContext(ToggleContext);

  useEffect(() => {
    setActiveNav('/');
  }, []);

  return (
    <div className='grid bg-gray-100 h-screen grid-rows-reg overflow-hidden max-h-screen'>
      <Navbar />
      {/* Main */}
      <main className='grid h-full'>
        <div className='grid w-1/2 mx-auto'>
          <section className='grid w-full my-auto'>
            <article className='text-center'>
              <div>
                <h2 className='text-xl font-corgs'>Welcome to</h2>
              </div>
              <div>
                <h1 className='font-bold text-6xl font-poppins'>TAVY EPOXY</h1>
              </div>
              <div className='mb-2'>
                <h3 className='text-xl font-corgs'>
                  Hand crafted furniture and artistic epoxy finishes
                </h3>
              </div>
              <div className='relative shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]'>
                <img className='w-full' src={BannerImage} alt='Banner' />
                <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full'>
                  <h6 className='text-5xl font-bold w-full text__stroke'>Furniture ~ Art ~ Lighting</h6>
                </div>
              </div>
              <div className='mt-4'>
                <h4>Hand made by artisans in Devon, UK</h4>
              </div>
              <div>
                <h5>Custom Designs available within 12 weeks</h5>
              </div>
            </article>
          </section>
        </div>
      </main>
    </div>
  );
}

export default HomePage;
