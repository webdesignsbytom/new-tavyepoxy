import React from 'react';
import { useNavigate } from 'react-router-dom';

function SaleItem({ item }) {
  const navigate = useNavigate();

  const navigateToPage = (event) => {
    navigate(`/sales/salesItem/${item.url}`, { state: item });
  };
  console.log('item', item);
  
  return (
    <article
      onClick={navigateToPage}
      className='w-full cursor-pointer rounded-xl h-fit px-4 py-8 grid justify-center shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]'
    >
      <section className='grid grid-flow-col justify-between'>
        <div className='mb-2'>
          <h6 className='font-semibold'>{item.name}</h6>
        </div>
        <div>
          <p>£ {item.price}</p>
        </div>
      </section>
      <div className='grid justify-center mt-2 leading-5'>
        <img
          className='max-h-[300px] w-full object-cover'
          src={item.pageData.images[0]}
          alt='design'
        />
        <div className='mt-1'>
          <p className=' mb-2'>{item.data}</p>
        </div>
        <div className='tooltip-text bg-slate-400 p-2 text-white text-center rounded tooltip-custom mt-2'>
          Click to see more!
        </div>
      </div>
    </article>
  );
}

export default SaleItem;