import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// Components
import Navbar from '../../components/nav/Navbar';
import FooterComponent from '../../components/footer/FooterComponent';
import CtaAboutLinks from '../../components/about/CtaAboutLinks';
// Images
import WorkshopImage1 from '../../assets/images/pages/workshop1.jpg';
import WorkshopImage2 from '../../assets/images/pages/workshop2.jpg';
import WorkshopImage3 from '../../assets/images/pages/workshop3.png';
import WorkshopImage4 from '../../assets/images/gallery/table9/lego1.jpg';
import WorkshopImage5 from '../../assets/images/gallery/table5/counter1.jpg';
import WorkshopImage6 from '../../assets/images/buttons/black_marble.jpg';
// Context
import { ToggleContext } from '../../context/ToggleContext';

function AboutPage() {
  const { setActiveNav } = useContext(ToggleContext);

  const navigate = useNavigate();

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
        <main className='lg:mt-4'>
          <div className='lg:w-1/2 p-4 lg:p-0 mx-auto pb-8 border-b-2 border-solid border-black'>
            <div className='mt-4 mb-6 pb-6 border-b-2 border-solid border-black'>
              <h2 className='text-2xl font-corgs font-medium'>
                About TavyEpoxy
              </h2>
            </div>
            <div className='relative text-center shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]'>
              <img src={WorkshopImage1} alt='Workshop' />
              <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full'>
                <h6 className='text-4xl lg:text-6xl font-extrabold w-full text__stroke'>
                  WELCOME TO <br /> THE WORKSHOP
                </h6>
              </div>
            </div>
          </div>
          <section className='grid lg:grid-cols-2 px-6 lg:px-0 lg:w-1/2 gap-4 mx-auto mt-10'>
            <section>
              <article className='pr-8'>
                <div>
                  <h3 className='font-semibold font-corgs mb-1 text-lg'>
                    About The Artists
                  </h3>
                  <p className='font-poppins'>
                    For years I have loved woodworking. The chance to work with
                    my hands a create something brings me joy. I am not a
                    natural artist. However i found working with epoxy and using
                    the beautiful random patterns was the perfect way to create
                    unique art and masterfully crafted furniture. Over the years
                    I have sold the piece I make to clear space. Now my table
                    and art are in demand i wanted to make the craft I love my
                    business. Joined now by another highly skilled artist to
                    help with production.
                  </p>
                </div>
                {/* Hidden for large */}
                <div className='lg:hidden grid pl-4'>
                  <div className='grid grid-cols-3 h-full object-cover border-2 border-black border-solid mt-4 mx-auto'>
                    <img
                      src={WorkshopImage3}
                      className='object-cover h-full w-full'
                      alt='Table'
                    />
                    <img
                      src={WorkshopImage2}
                      className='object-cover h-full w-full'
                      alt='Table'
                    />
                    <img
                      src={WorkshopImage1}
                      className='object-cover h-full w-full'
                      alt='Table'
                    />
                  </div>
                </div>
                <div className='mt-10'>
                  <h4 className='font-semibold font-corgs mb-1 text-lg'>
                    Hand crafted epoxy furniture
                  </h4>
                  <p className='font-poppins'>
                    In my workshop I hand make tables and counters using high
                    quality timbers. Treated and sanded perfectly. Then finished
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
                    tailored to suit any room, product or occasion. In-lays can
                    create beautiful accents and bring to life well defined
                    shapes.
                  </p>
                </div>
                {/* Hidden for large */}
                <div className='lg:hidden grid pl-4'>
                  <div className='grid grid-cols-3 h-full object-cover border-2 border-black border-solid mt-4 mx-auto'>
                    <img
                      src={WorkshopImage4}
                      className='object-cover h-full w-full'
                      alt='Table'
                    />
                    <img
                      src={WorkshopImage5}
                      className='object-cover h-full w-full'
                      alt='Table'
                    />
                    <img
                      src={WorkshopImage6}
                      className='object-cover h-full w-full'
                      alt='Table'
                    />
                  </div>
                </div>
                <div className='mt-10'>
                  <h4 className='font-semibold font-corgs mb-1 text-lg'>
                    Huge variety of materials
                  </h4>
                  <p className='font-poppins'>
                    I try to keep all my tables as affordable as possible, using
                    excellent quality base materials beautiful tables can be
                    made. If requested however, I have access to, or can acquire
                    almost any timber or material you require. The range of
                    colours and textures is in the thousands. Oils, dyes,
                    pigments, metallics, neon, glowing, transparent and any
                    feature you can think of can be in-layed to make you a truly
                    custom and unique furniture piece.
                  </p>
                </div>
              </article>
            </section>
            <section>
              <section className='hidden lg:grid gap-4'>
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
          <CtaAboutLinks navigateToPage={navigateToPage} />
        </main>
      </section>
      <FooterComponent />
    </div>
  );
}

export default AboutPage;
