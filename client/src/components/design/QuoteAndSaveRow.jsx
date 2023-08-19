import React from 'react';
// Components
import QuoteData from './QuoteData';
import SaveDesignButton from './SaveDesignButton';
import ShippingQuote from './ShippingQuote';

function QuoteAndSaveRow({ designQuoteData }) {
  return (
    <section className='grid grid-flow-col outline gap-2 outline-black outline-2 rounded p-1 my-2'>
      <QuoteData designQuoteData={designQuoteData} />
      <ShippingQuote designQuoteData={designQuoteData} />
      <SaveDesignButton />
    </section>
  );
}

export default QuoteAndSaveRow;
