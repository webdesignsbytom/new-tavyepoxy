import React, { useContext, useEffect, useState } from 'react';
// Components
import Navbar from '../../components/nav/Navbar';
// Context
import { ToggleContext } from '../../context/ToggleContext';
import { galleryDataArray } from '../../utils/data/GalleryData';
import GalleryItem from '../../components/gallery/GalleryItem';

function GalleryPage() {
  const { setActiveNav } = useContext(ToggleContext);
  const [galleryItems] = useState(galleryDataArray);

  useEffect(() => {
    setActiveNav('/gallery');
  }, []);

  return (
    <div className='bg-gray-100 min-h-screen'>
      <section className='grid grid-rows-reg h-full'>
        <Navbar />
        <main className='grid w-full h-full mt-4'>
          <div className='grid w-full mx-auto px-2 lg:px-8 grid-rows-reg h-full pb-24'>
            <section className='mt-4 grid container lg:w-1/2 mx-auto'>
              <article className='text-center px-4 border-b-2 border-solid border-black pb-6'>
                <div>
                  <h1 className='text-2xl font-corgs font-medium'>
                    The Gallery
                  </h1>
                  <h2 className='text-2xl font-corgs font-medium'>
                    Some of our best available styles
                  </h2>
                </div>
                <div className='mt-2'>
                  <h3>
                    A variety of colours, materials, shapes and finishes are
                    used in the workshop.
                  </h3>
                  <h4>
                    These beautiful pieces are all hand crafted in Devon, UK
                  </h4>
                  <h5>All pieces come as wall art or table furniture</h5>
                  <h6>Available finishes for custom orders</h6>
                </div>
              </article>
            </section>
            {/* GALLERY */}
            <section className='mt-16 px-2 lg:px-12'>
              <div className='grid justify-center md:grid-cols-2 lg:grid-cols-aaa gap-4 text-center'>
                {galleryItems?.map((item, index) => {
                  return <GalleryItem key={index} item={item} />;
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
