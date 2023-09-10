import React from 'react';
// Components
import Navbar from '../../components/nav/Navbar';

function AfterPurchasePage() {
  return (
    <div className='grid bg-gray-100 min-h-screen grid-rows-reg'>
      <Navbar />
      {/* Main */}
      <main className='grid h-full'>
        <div className='grid w-full px-4 lg:px-0 lg:w-1/2 mx-auto'>
          <section></section>
        </div>
      </main>
    </div>
  );
}

export default AfterPurchasePage;
