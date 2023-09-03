import React from 'react';
import { useNavigate } from 'react-router-dom';
// Images
import SaleImage from '../../assets/images/sales/onsale.png'

function SaleItem({ item }) {
  const navigate = useNavigate();

  const navigateToPage = (event) => {
    navigate(`/sales/salesItem/${item.url}`, { state: item });
  };
  console.log('item', item);

  return (
    <article
      onClick={navigateToPage}
      className='cursor-pointer rounded-xl h-full px-4 py-4 grid w-full shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]'
    >
      <section className='grid grid-flow-col justify-between'>
        <div className='mb-2'>
          <h6 className='font-semibold'>{item.name}</h6>
        </div>
        <div>
          <p>£ {item.price}</p>
        </div>
      </section>
      <section className='relative'>
        {item.onSale && (
          <div className='absolute top-0 left-0'>
            <img src={SaleImage} alt='Sale' className='w-[120px]' />
          </div>
        )}
        <div className='grid justify-center mt-2 leading-5'>
          <img
            className='max-h-[300px] w-full object-cover'
            src={item.pageData.images[0]}
            alt='design'
          />
          <div className='mt-1'>
            <p className=' mb-2'>{item.data}</p>
          </div>
        </div>
      </section>
      <section className='grid w-full items-end'>
        <div className='h-[50px] w-full grid items-center bg-slate-400 p-2 text-white text-center rounded tooltip-custom mt-2'>
          <span>Click to see more!</span>
        </div>
      </section>
    </article>
  );
}

export default SaleItem;
