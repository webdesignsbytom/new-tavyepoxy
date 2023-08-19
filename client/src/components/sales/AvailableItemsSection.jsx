import React, { useState } from 'react';
// Data
import { AvailableItemsArray } from '../../utils/data/AvailableItemsData';
// Components
import SoldoutDisplay from '../../components/sales/SoldoutDisplay';
import SaleItem from './SaleItem';

function AvailableItemsSection() {
  const [availableProducts, setAvailableProducts] =
    useState(AvailableItemsArray);
  console.log('availableProducts', availableProducts);
  console.log('availableProducts', availableProducts.length);

  return (
    <section className='grid'>
      <div className='mt-6'>
        <h3 className='text-xl font-semibold border-b-2 border-solid border-black pb-4'>
          Tables and Furniture For Sale
        </h3>
      </div>

      <section className='p-2 my-2'>
        {availableProducts.length > 0 ? (
          <div>
            {availableProducts.map((item, index) => {
              return <SaleItem item={item} key={index} />;
            })}
          </div>
        ) : (
          <div>
            <SoldoutDisplay />
          </div>
        )}
      </section>
    </section>
  );
}

export default AvailableItemsSection;
