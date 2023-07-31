import React from 'react';
import { Link } from 'react-router-dom';
// images
import LogoImage from '../../assets/images/logos/logo.jpg';

function FooterComponent() {
  return (
    <footer className='h-full grid bg-yellow-400 border-t-2 border-solid border-black mt-16'>
      <section className='grid grid-cols-3 px-6 my-2'>
        <div className='grid grid-cols-reg gap-6 grid-rows-1'>
          <div className='grid'>
            <img className='w-[100px]' src={LogoImage} alt='Tavy Epoxy Logo' />
          </div>
          <div className='grid grid-rows-5 text-sm h-fit'>
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/gallery'>Gallery</Link>
            <Link to='/sales'>Sales</Link>
            <Link to='/contact'>Contact</Link>
          </div>
        </div>
        <section className='grid justify-center items-center'>
          <div className='text-center'>
            <p className='my-2 md:my-0 font-extrabold text-6xl font-poppins marble-text'>
              TAVY EPOXY
            </p>
            <p>Artistic and unique epoxy furniture</p>
          </div>
        </section>
        <section className='grid items-center'>
          <div className='text-sm text-right'>
            Phone: 5453948634634 <br />
            Email: Emrial@gmail.com <br />
            Hand made in Devon - United Kingdom
          </div>
        </section>
      </section>
    </footer>
  );
}

export default FooterComponent;
