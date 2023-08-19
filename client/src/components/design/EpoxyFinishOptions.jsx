import React from 'react';
// Data
import { epoxyFinishData } from '../../utils/data/EpoxyFinishOptionsData';
// Components
import FinishItem from './FinishItem';

function EpoxyFinishOptions({ closeFinishOptionsModal }) {
  return (
    <section className='grid absolute z-40 h-full w-full bg-white outline outline-2 outline-black p-4'>
      <article className='grid grid-rows-a1a'>
        <section>
          <div className='text-center'>
            <h6 className='font-semibold'>Finish Options</h6>
          </div>
        </section>
        <section className='mt-4'>
          <section className='grid grid-cols-2 lg:grid-flow-col'>
            {epoxyFinishData.map((data, index) => {
              return <FinishItem key={index} data={data} />;
            })}
          </section>
          <section className='grid justify-center mt-4'>
            <select
              id='legs'
              name='legs'
              // onChange={handleChange}
              className='text-lg p-1 rounded'
              required
            >
              <option defaultValue='standard_hairpin'>standard Hairpin</option>
              <option value='hairpin_three_prong'>Hairpin Three Prong</option>
            </select>
          </section>
        </section>
        <section>
          <section className='text-center mb-5'>
            <p>
              You are welcome to design or find your own style and send us an
              image.
            </p>
          </section>
          <div className='grid justify-center'>
            <button
              className='outline white__marble__bg outline-black outline-2 rounded font-bold px-4 py-2 hover:opacity-70'
              onClick={closeFinishOptionsModal}
            >
              CLOSE
            </button>
          </div>
        </section>
      </article>
    </section>
  );
}

export default EpoxyFinishOptions;
