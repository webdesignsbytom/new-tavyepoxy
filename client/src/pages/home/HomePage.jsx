import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// Components
import Navbar from '../../components/nav/Navbar';
// Context
import { ToggleContext } from '../../context/ToggleContext';
// Images
import BannerImage from '../../assets/images/epoxy/bg1.png';
import CtaHomeLinks from '../../components/home/CtaHomeLinks';

function HomePage() {
  const { setActiveNav } = useContext(ToggleContext);

  const navigate = useNavigate();

  useEffect(() => {
    setActiveNav('/');
  }, []);

  const navigateToPage = (event) => {
    const { id } = event.target;
    setActiveNav(id);
    navigate(`${id}`);
  };

  return (
    <div className='grid bg-gray-100 h-screen grid-rows-reg lg:overflow-hidden lg:max-h-screen'>
      <Navbar />
      {/* Main */}
      <main className='grid h-full'>
        <div className='grid w-full px-4 md:w-1/2 mx-auto'>
          <section className='grid w-full my-6 md:my-auto'>
            <article className='text-center'>
              <div>
                <h2 className='text-xl font-corgs'>Welcome to</h2>
              </div>
              <div>
                <h1 className='my-2 md:my-0 font-extrabold text-6xl font-poppins marble-text'>
                  TAVY EPOXY
                </h1>
              </div>
              <div className='mb-2'>
                <h3 className='text-xl font-corgs'>
                  Hand crafted furniture and artistic epoxy finishes
                </h3>
              </div>
              <div className='relative shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]'>
                <img
                  className='w-full my-4 md:my-0 rounded'
                  src={BannerImage}
                  alt='Banner'
                />
                <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full'>
                  <h6 className='text-5xl lg:hidden font-bold w-full text__stroke'>
                    Furniture <br /> ~ Art ~ <br /> Epoxy
                  </h6>
                  <h6 className='hidden lg:grid text-5xl font-bold w-full text__stroke'>
                    Furniture ~ Art ~ Epoxy
                  </h6>
                </div>
              </div>
              <div className='mt-4'>
                <h4>Hand made by craftsmen in Devon, UK</h4>
              </div>
              <div className='text-sm'>
                <h5 className='my-4 md:my-0'>
                  Custom Designs available within 4 weeks - 
                  <span>{' '}Starting at <span className='font-bold'>£220!</span></span>
                </h5>
                <h6>World Wide Shipping available</h6>
              </div>
              <CtaHomeLinks navigateToPage={navigateToPage} />
            </article>
          </section>
        </div>
      </main>
    </div>
  );
}

export default HomePage;
