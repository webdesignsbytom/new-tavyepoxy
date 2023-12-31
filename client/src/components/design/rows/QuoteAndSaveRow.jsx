import React from 'react';
// Components
import QuoteData from '../QuoteData';
import SaveDesignButton from '../SaveDesignButton';
import ShippingQuote from '../ShippingQuote';

function QuoteAndSaveRow() {
  return (
    <section className='grid md:grid-flow-col outline gap-2 outline-black outline-2 rounded p-1 my-2'>
      <QuoteData />
      <ShippingQuote />
      <SaveDesignButton />
    </section>
  );
}

export default QuoteAndSaveRow;
