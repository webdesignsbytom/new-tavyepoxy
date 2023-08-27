import React, { useContext } from 'react';
// Context
import { DesignContext } from '../../context/DesignContext';

function QuoteData() {
  const { designQuoteData } = useContext(DesignContext);
  return (
    <section>
      <div>
        <h6>Quoted Price</h6>
      </div>
      <div className='bg-white outline outline-black outline-2 rounded p-2'>
        <span>£{designQuoteData.finalQuote}</span>
      </div>
    </section>
  );
}

export default QuoteData;
