import React, { useContext, useEffect } from 'react';
// Components
import Navbar from '../../components/nav/Navbar';
import Footer from '../../components/footer/Footer';
// Images
import WorkshopImage1 from '../../assets/images/pages/workshop1.jpg';
import WorkshopImage2 from '../../assets/images/pages/workshop2.jpg';
import WorkshopImage3 from '../../assets/images/pages/workshop3.png';
// Context
import { ToggleContext } from '../../context/ToggleContext';

function AboutPage() {
  const { setActiveNav } = useContext(ToggleContext);

  useEffect(() => {
    setActiveNav('/about');
  }, []);

  return (
    <div className='bg-[#f6f6f4] min-h-screen'>
      <section className='grid grid-rows-reg h-full'>
        <Navbar />
        <main className='mt-4'>
          <div className='w-1/2 mx-auto'>
            <div className='my-4'>
              <h2 className='text-xl font-corgs font-semibold'>
                ABOUT TAVY EPOXY
              </h2>
            </div>
            <div className='relative text-center shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]'>
              <img src={WorkshopImage1} alt='Workshop' />
              <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full'>
                <h6 className='text-6xl font-extrabold w-full text__stroke'>
                  WELCOME TO <br /> THE WORKSHOP
                </h6>
              </div>
            </div>
          </div>
          <section className='grid grid-cols-2 w-1/2 gap-4 mx-auto mt-10'>
            <section>
              <article className='pr-8'>
                <div>
                  <h3 className='font-semibold font-corgs'>
                    Hand crafted epoxy furniture
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Deleniti quidem quam, corrupti deserunt, culpa vero,
                    voluptatem molestiae voluptatum iste ab eum. Libero
                    repellendus officiis beatae explicabo dolores repudiandae
                    doloremque similique tenetur laborum vitae perferendis sed
                    labore animi sunt, quibusdam odio commodi veniam eveniet
                    praesentium nobis tempore! Blanditiis architecto cum
                    reprehenderit?
                  </p>
                </div>
                <div className='mt-10'>
                  <h4 className='font-semibold font-corgs'>
                    Hand crafted epoxy furniture
                  </h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Deleniti quidem quam, corrupti deserunt, culpa vero,
                    voluptatem molestiae voluptatum iste ab eum. Libero
                    repellendus officiis beatae explicabo dolores repudiandae
                    doloremque similique tenetur laborum vitae perferendis sed
                    labore animi sunt, quibusdam odio commodi veniam eveniet
                    praesentium nobis tempore! Blanditiis architecto cum
                    reprehenderit?
                  </p>
                </div>
              </article>
            </section>
            <section>
              <section className='grid gap-4'>
                <div>
                  <img src={WorkshopImage3} alt='Table' />
                </div>
                <div>
                  <img src={WorkshopImage2} alt='Table' />
                </div>
              </section>
            </section>
          </section>
        </main>
      </section>
      <Footer />
    </div>
  );
}

export default AboutPage;
