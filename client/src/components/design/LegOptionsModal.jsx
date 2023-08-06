import React from 'react';

function LegOptionsModal({ closeLegOptionsModal }) {
  return (
    <section className='grid absolute h-full w-full bg-white outline outline-2 outline-black p-4'>
      <article className='grid grid-rows-a1a'>
        <section>
          <div>
            <h6>Leg Options</h6>
          </div>
        </section>
        <section>pics</section>
        <section>
          <div>
            <button onClick={closeLegOptionsModal}>CLOSE</button>
          </div>
        </section>
      </article>
    </section>
  );
}

export default LegOptionsModal;
