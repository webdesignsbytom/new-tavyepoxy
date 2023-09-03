import React, { useState } from 'react';
// Data
import { AvailableItemsArray } from '../../utils/data/AvailableItemsData';
// Components
import SoldoutDisplay from '../../components/sales/SoldoutDisplay';
import SaleItem from './SaleItem';

function AvailableItemsSection() {
  const [availableProducts] =
    useState(AvailableItemsArray);

  return (
    <section className='grid'>
      <div className='mt-12'>
        <h3 className='text-xl font-semibold border-b-2 border-solid border-black pb-4'>
          Tables and Furniture For Sale
        </h3>
      </div>

      <section className='p-2 my-2'>
        {availableProducts.length > 0 ? (
          <section className='grid md:grid-cols-3 gap-4'>
            {availableProducts.map((item, index) => {
              return <SaleItem item={item} key={index} />;
            })}
          </section>
        ) : (
          <section>
            <SoldoutDisplay />
          </section>
        )}
      </section>

    </section>
  );
}

export default AvailableItemsSection;
