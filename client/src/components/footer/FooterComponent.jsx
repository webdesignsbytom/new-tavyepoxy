import React from 'react';
import { Link } from 'react-router-dom';
// images
import LogoImage from '../../assets/images/logos/logo.jpg';

function FooterComponent() {
  return (
    <footer className='h-full wood__bg grid border-t-2 border-solid border-black mt-16'>
      <section className='grid lg:grid-cols-3 px-6 my-2'>
        <section className='text-center mb-2 lg:hidden '>
          <p className='mt-2 md:my-0 font-extrabold text-6xl font-poppins marble-text'>
            TAVY EPOXY
          </p>
          <p className='font-semibold'>Artistic and unique epoxy furniture</p>
        </section>
        <section className='grid grid-cols-reg gap-6 grid-rows-1 w-full items-center '>
          <div className='grid'>
            <img className='w-[70px] lg:w-[100px]' src={LogoImage} alt='Tavy Epoxy Logo' />
          </div>
          <div className='grid grid-cols-5 justify-end text-sm h-fit font-bold text-center'>
            <Link className='text-hyperlink-blue' to='/'>
              Home
            </Link>
            <Link className='text-hyperlink-blue' to='/about'>
              About
            </Link>
            <Link className='text-hyperlink-blue' to='/gallery'>
              Gallery
            </Link>
            <Link className='text-hyperlink-blue' to='/sales'>
              Sales
            </Link>
            <Link className='text-hyperlink-blue' to='/contact'>
              Contact
            </Link>
          </div>
        </section>
        <section className='grid justify-center items-center'>
          <div className='text-center hidden lg:grid'>
            <p className='mt-2 md:my-0 font-extrabold text-6xl font-poppins marble-text'>
              TAVY EPOXY
            </p>
            <p>Artistic and unique epoxy furniture</p>
          </div>
        </section>
        <section className='grid items-center font-bold'>
          <div className='text-sm text-center lg:text-right'>
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
