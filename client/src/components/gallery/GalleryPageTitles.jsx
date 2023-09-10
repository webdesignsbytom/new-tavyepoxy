import React from 'react';
// Components
import SocialMediaLinks from '../social/SocialMediaLinks';

function GalleryPageTitles() {
  return (
    <article className='text-center px-4 border-b-2 border-solid border-black pb-6'>
      <div>
        <h1 className='text-2xl font-corgs font-medium'>The Gallery</h1>
        <h2 className='text-2xl font-corgs font-medium'>
          Some of our best available styles
        </h2>
      </div>
      <div className='mt-2'>
        <h3>
          A variety of colours, materials, shapes and finishes are used in the
          workshop.
        </h3>
        <h4>These beautiful pieces are all hand crafted in Devon, UK</h4>
        <h5>All pieces come as wall art or table furniture</h5>
        <h6>Available finishes for custom orders</h6>
        <SocialMediaLinks />
      </div>
    </article>
  );
}

export default GalleryPageTitles;
