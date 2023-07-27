import React from 'react';
import { useLocation } from 'react-router-dom';
// Components
import Navbar from '../../components/nav/Navbar';

function GalleryItemPage() {
  const location = useLocation();
  const item = location.state;
  return (
    <div className='grid bg-gray-100 lg:h-screen grid-rows-reg lg:overflow-hidden lg:max-h-screen'>
      <Navbar />
      {/* Main */}
      <main className='grid h-full mb-2'>
        <div className='grid w-full lg:w-1/2 mx-auto grid-rows-reg'>
          <section className='my-4'>
            <div className='text-center border-b-2 border-black border-solid pb-2 mx-4'>
              <h1 className='text-2xl font-corgs'>{item.name}</h1>
            </div>
          </section>
          <section className='grid w-full lg:grid-cols-2 gap-4 mb-2'>
            {/* Left */}
            <section className='shadow-[rgba(0,_0,_0,_0.2)_0px_60px_40px_-7px]'>
              <article className='p-4'>
                <div className='mb-4 '>
                  <h2 className='text-xl'>{item.pageData.subtitle}</h2>
                </div>
                <div>
                  <div className='mb-2'>
                    <h3 className='underline'>Design information</h3>
                  </div>
                  <div>
                    <div>
                      <span>Timber: {item.pageData.timber}</span>
                    </div>
                    <div>
                      <span>Undercoat: {item.pageData.undercoat}</span>
                    </div>
                    <div>
                      <span>Colours used: {item.colours}</span>
                    </div>
                    <div>
                      <span>Dimensions: {item.pageData.dimensions}</span>
                    </div>
                    <div>
                      <span>Legs: {item.pageData.legs}</span>
                    </div>
                    <div>
                      <span>
                        Production Time: {item.pageData.productionTime}
                      </span>
                    </div>
                    <div>
                      <span>Price: {item.pageData.price}</span>
                    </div>
                  </div>
                  <div className='mt-4'>
                    <span>Data: {item.data}</span>
                  </div>
                </div>
              </article>
            </section>
            {/* Right */}
            <section className='shadow-[rgba(0,_0,_0,_0.2)_0px_60px_40px_-7px] p-4'>
              <div className='outline outline-black outline-2'>
                <img className='' src={item.imageUrl} alt='design' />
              </div>

              {/* Buttons */}
              <section className='grid grid-flow-col gap-4 my-4 px-2'>
                <div>
                  <button className='outline outline-2 font-semibold outline-black rounded-xl py-2 w-full px-4 bg-yellow-400 active:scale-95 no__highlights hover:bg-yellow-200 '>Prev</button>
                </div>
                <div>
                  <button className='outline outline-2 font-semibold outline-black rounded-xl py-2 w-full px-4 bg-yellow-400 active:scale-95 no__highlights hover:bg-yellow-200 '>Next</button>
                </div>
              </section>
            </section>
          </section>
        </div>
      </main>
    </div>
  );
}

export default GalleryItemPage;
