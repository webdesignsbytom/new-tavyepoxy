import React, { useContext, useEffect, useState } from 'react';
// Components
import Navbar from '../../components/nav/Navbar';
import GalleryItem from '../../components/gallery/GalleryItem';
import GalleryPageTitles from '../../components/gallery/GalleryPageTitles';
// Context
import { ToggleContext } from '../../context/ToggleContext';
// Data
import { galleryDataArray } from '../../utils/data/GalleryData';

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
              <GalleryPageTitles />
            </section>
            {/* GALLERY */}
            <section className='mt-16 px-2 lg:px-12'>
              <div className='grid justify-center md:grid-cols-2 lg:grid-cols-aaa gap-6 text-center'>
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
