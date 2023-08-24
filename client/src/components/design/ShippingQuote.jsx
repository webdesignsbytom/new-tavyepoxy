import React, { useContext } from 'react'
// Context
import { DesignContext } from '../../context/DesignContext';

function ShippingQuote() {
  const { designQuoteData } = useContext(DesignContext);

  return (
    <section>
      <div>
        <h6>Shipping</h6>
      </div>
      <div className='bg-white outline outline-black outline-2 rounded p-2'>
        <span>£24</span>
      </div>
    </section>
  )
}

export default ShippingQuote