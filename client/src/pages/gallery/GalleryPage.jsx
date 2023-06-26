import React, { useContext, useEffect, useState } from 'react';
// Components
import Navbar from '../../components/nav/Navbar';
// Context
import { ToggleContext } from '../../context/ToggleContext';
import { galleryDataArray } from '../../utils/GalleryData'

function GalleryPage() {
  const { setActiveNav } = useContext(ToggleContext);
  const [galleryItems, setGalleryItems] = useState(galleryDataArray);
  console.log('galleryItems', galleryItems);

  useEffect(() => {
    setActiveNav('/gallery');
  }, []);

  return (
    <div className='bg-[#f6f6f4] min-h-screen'>
      <section className='grid grid-rows-reg h-full'>
        <Navbar />
        <main className='grid w-full h-full mt-4'>
          <div className='grid w-full mx-auto px-2 lg:px-8 grid-rows-reg h-full pb-24'>
            <section className='mt-4 grid container lg:w-1/2 mx-auto'>
              <article className='text-center px-4 border-b-2 border-solid border-black pb-6'>
                <div>
                  <h2 className='text-xl font-corgs'>Welcome To The Gallery</h2>
                </div>
                <div className='mt-2'>
                  <h3>
                    The collection represents the quality of work and variety in
                    subjects.
                  </h3>
                  <h4>
                    These beautiful pieces are all hand crafted in Cornwall, UK
                  </h4>
                </div>
              </article>
            </section>
            {/* GALLERY */}
            <section className='mt-16 px-12'>
              <div className='grid lg:grid-cols-3 text-center gap-y-24'>
                {galleryItems?.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className='w-fit mx-auto px-4 py-8 grid justify-center shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]'
                    >
                      <div>
                        <span>{item.name}</span>
                      </div>
                      <div className='grid justify-center mt-2'>
                        <img src={item.imageUrl} alt='design' />
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>
          </div>
        </main>
      </section>
    </div>
  );
}
export default GalleryPage;
