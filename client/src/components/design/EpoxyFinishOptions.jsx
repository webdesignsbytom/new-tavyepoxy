import React from 'react';

function EpoxyFinishOptions({ closeFinishOptionsModal }) {
  return (
    <section className='grid absolute h-full w-full bg-white outline outline-2 outline-black p-4'>
      <article className='grid grid-rows-a1a'>
        <section>
          <div>
            <h6>Finish Options</h6>
          </div>
        </section>
        <section>pics</section>
        <section>
          <div>
            <button onClick={closeFinishOptionsModal}>CLOSE</button>
          </div>
        </section>
      </article>
    </section>
  );
}

export default EpoxyFinishOptions;
