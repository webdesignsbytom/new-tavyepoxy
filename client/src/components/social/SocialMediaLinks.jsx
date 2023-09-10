import React from 'react';
// Icons
import { AiFillInstagram } from 'react-icons/ai';

function SocialMediaLinks() {
  return (
    <section>
      <div className='text-center mt-2'>
        <span>
          See more images and videos on{' '}
          <span className='text-hyperlink-blue'>
            <br />
            <a
              href='https://www.instagram.com/tavyepoxy/'
              className='text-center'
            >
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
  );
}

export default SocialMediaLinks;
