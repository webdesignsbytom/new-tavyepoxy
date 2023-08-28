import React, { useContext, useEffect } from 'react';
// Components
import Navbar from '../../components/nav/Navbar';
// Context
import { ToggleContext } from '../../context/ToggleContext';
import { Link } from 'react-router-dom';
// Icons
import { AiFillInstagram } from 'react-icons/ai';

function ContactPage() {
  const { setActiveNav } = useContext(ToggleContext);

  useEffect(() => {
    setActiveNav('/contact');
  }, []);

  return (
    <div className='bg-[#f6f6f4] h-screen overflow-hidden'>
      <section className='grid grid-rows-reg h-full overflow-hidden'>
        <Navbar />
        <main className='grid w-full h-full overflow-hidden mt-4'>
          <div className='grid container w-full lg:w-1/2 mx-auto overflow-hidden px-2 lg:px-8 h-full pb-24'>
            <section className='grid items-center justify-center h-full'>
              <div className='outline outline-1 outline-black py-8 px-6 rounded-lg bg-[#f0efeb]'>
                <div className='text-center'>
                  <h2 className='font-corgs text-3xl mb-2'>CONTACT</h2>
                  <h3>Josh @ TavyEpoxy</h3>
                </div>
                <section>
                  <div className='mt-4 text-center'>
                    <p>Please feel free to contact me</p>
                    <p>I am happy to answer any questions.</p>
                    <p>Bespoke and custom jobs on request.</p>
                    <div className='mt-2 text-center'>
                      <strong>By Email @</strong>{' '}
                      <span>josh@tavy-epoxy.co.uk</span>
                    </div>
                    {/* <div className='text-center'>
                      <strong>By Phone @</strong> <span></span>
                    </div> */}
                    <div className='text-center mt-4'>
                      <p>
                        You can also <br />
                        <span className='text-hyperlink-blue'>
                          <Link to='/sales'>Click Here</Link>
                        </span>{' '}
                        and be taken to one of my <br />
                        shopping portals instantly!
                      </p>
                    </div>
                  </div>
                  <div className='text-center mt-2'>
                    <span>
                      See more images and videos on{' '}
                      <span className='text-hyperlink-blue'><br />
                        <a href='https://www.instagram.com/tavyepoxy/' className='text-center'>
                          <div className='grid grid-flow-col justify-center'>

                          Instagram{' '}
                          <div className='grid items-center pl-2'>
                            <AiFillInstagram />
                          </div>
                          </div>
                        </a>
                      </span>
                    </span>
                  </div>
                </section>
              </div>
            </section>
          </div>
        </main>
      </section>
    </div>
  );
}

export default ContactPage;
