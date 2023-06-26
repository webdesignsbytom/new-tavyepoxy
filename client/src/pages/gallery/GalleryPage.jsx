import React, { useContext, useEffect, useState } from 'react';
// Components
import Navbar from '../../components/nav/Navbar';
// Context
import { ToggleContext } from '../../context/ToggleContext';
import { galleryDataArray } from '../../utils/GalleryData';
import GalleryItem from '../../components/gallery/GalleryItem';

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
                    All these styles are available and the patterns are unique
                    each time
                  </h3>
                  <h4>
                    These beautiful pieces are all hand crafted in Devon, UK
                  </h4>
                  <h5>All pieces come as wall art or table furniture</h5>
                </div>
              </article>
            </section>
            {/* GALLERY */}
            <section className='mt-16 px-12'>
              <div className='grid lg:grid-cols-3 text-center gap-y-24'>
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
