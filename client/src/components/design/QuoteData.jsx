import React from 'react';

function QuoteData({ designQuoteData }) {
  return (
    <section >
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
