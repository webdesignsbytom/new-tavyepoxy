import React, { useContext, useEffect } from 'react';
// Components
import Navbar from '../../components/nav/Navbar';
import Footer from '../../components/footer/Footer';
// Images
import WorkshopImage1 from '../../assets/images/pages/workshop1.jpg';
import WorkshopImage2 from '../../assets/images/pages/workshop2.jpg';
import WorkshopImage3 from '../../assets/images/pages/workshop3.png';
import WorkshopImage4 from '../../assets/images/gallery/table2.jpg';
// Context
import { ToggleContext } from '../../context/ToggleContext';
import { useNavigate } from 'react-router-dom';

function AboutPage() {
  const { setActiveNav } = useContext(ToggleContext);

  const navigate = useNavigate()

  useEffect(() => {
    setActiveNav('/about');
  }, []);

  const navigateToPage = (event) => {
    const { id } = event.target;
    setActiveNav(id);
    navigate(`${id}`);
  };

  return (
    <div className='bg-gray-100 min-h-screen'>
      <section className='grid grid-rows-reg h-full'>
        <Navbar />
        <main className='mt-4'>
          <div className='w-1/2 mx-auto pb-8 border-b-2 border-solid border-black'>
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
                  <h3 className='font-semibold font-corgs mb-1 text-lg'>
                    About The Artist
                  </h3>
                  <p className='font-poppins'>
                    For years I have loved woodworking. The chance to work with
                    my hands a create something brings me joy. I am not a
                    natural artist. However i found working with epoxy and using
                    the beautiful random patterns was the perfect way to create
                    unique art and masterfully crafted furniture. Over the years
                    I have sold the piece I make to clear space. Now my table
                    and art are in demand i wanted to make the craft I love my
                    business.
                  </p>
                </div>
                <div className='mt-10'>
                  <h4 className='font-semibold font-corgs mb-1 text-lg'>
                    Hand crafted epoxy furniture
                  </h4>
                  <p className='font-poppins'>
                    In my workshop I hand make tables and counters using high
                    quality timber, treated and sanded perfectly. The finsihed
                    with a unique and stunning epoxy resin cover. Using hundreds
                    of woodworking styles, colours, dyes and metallics these
                    pieces have layers of complexity that goes deep into the
                    materials.
                  </p>
                </div>
                <div className='mt-10'>
                  <h4 className='font-semibold font-corgs mb-1 text-lg'>
                    Custom designs
                  </h4>
                  <p className='font-poppins'>
                    My projects have often been made for someone to show off a
                    prized possession they own. I tailor make the entire project
                    to suit the needs of the client. The colour palette can be
                    tailoured to suit any room, product or occasion. In-lays can
                    create beautiful accents and bring to life well defined
                    shapes.
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
                <div>
                  <img src={WorkshopImage4} alt='Table' />
                </div>
              </section>
            </section>
          </section>
          {/* CTA */}
          <section className='grid w-1/2 gap-4 mx-auto mt-10'>
            <div className='grid grid-cols-3 gap-4 w-full mx-auto'>
              <div className='grid w-full'>
                <button id='/gallery' onClick={navigateToPage} className='outline outline-2 outline-black rounded-xl py-2 px-4 bg-yellow-400 active:scale-95 no__highlights hover:bg-yellow-200 '>
                  Gallery
                </button>
              </div>
              <div className='grid w-full'>
                <button id='/materials' onClick={navigateToPage} className='outline outline-2 outline-black rounded-xl py-2 px-4 bg-yellow-400 active:scale-95 no__highlights hover:bg-yellow-200 '>
                  Materials
                </button>
              </div>
              <div className='grid w-full'>
                <button id='/contact' onClick={navigateToPage} className='outline outline-2 outline-black rounded-xl py-2 px-4 bg-yellow-400 active:scale-95 no__highlights hover:bg-yellow-200 '>
                  Contact
                </button>
              </div>
            </div>
          </section>
        </main>
      </section>
      <Footer />
    </div>
  );
}

export default AboutPage;
