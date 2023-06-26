import React, { useContext, useEffect } from 'react';
// Components
import Navbar from '../../components/nav/Navbar';
// Context
import { ToggleContext } from '../../context/ToggleContext';

function HomePage() {
  const { setActiveNav } = useContext(ToggleContext);

  useEffect(() => {
    setActiveNav('/');
  }, []);

  return (
    <div className='grid bg-gray-100 font-poppins h-screen grid-rows-reg overflow-hidden max-h-screen'>
      <Navbar />
      {/* Main */}
      <main className='grid h-full'>
        <div className='grid w-1/2 mx-auto'>
          <section className='bg-yellow-500 grid w-full'>yello</section>
        </div>
      </main>
    </div>
  );
}

export default HomePage;
