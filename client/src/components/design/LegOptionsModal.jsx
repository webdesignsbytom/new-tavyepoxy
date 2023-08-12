import React, { useState } from 'react';
// Data
import { LegData } from '../../utils/LegOptionsData';
import LegItem from './LegItem';

function LegOptionsModal({ closeLegOptionsModal }) {
  const [legDataArray, setLegDataArray] = useState(LegData);

  return (
    <section className='grid absolute h-full w-full bg-white outline outline-2 outline-black p-4'>
      <article className='grid grid-rows-a1a'>
        <section>
          <div className='text-center'>
            <h6>Leg Options</h6>
          </div>
        </section>
        <section>
          <section className='grid md:grid-flow-col'>
            {legDataArray.map((data, index) => {
              return <LegItem key={index} data={data} />;
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
              <option value='a_frame_small'>A Frame L350 H400 mm</option>
              <option value='a_frame_large'>A Frame L690 H710 mm</option>
              <option value='x_frame_small'>X Frame L350 H400 mm</option>
              <option value='x_frame_large'>X Frame L500 H710 mm</option>
              <option value='square_frame_small'>Sq Frame L350 H400 mm</option>
              <option value='square_frame_medium'>Sq Frame L500 H710 mm</option>
              <option value='square_frame_large'>Sq Frame L500 H710 mm</option>
              <option value='square_frame_xlarge'>Sq Frame L800 H710 mm</option>
            </select>
          </section>
        </section>
        <section>
          <section className='text-center mb-5'>
            <p>
              You are welcome to go online and find any legs you wish fitted on
              your custom table.
            </p>
          </section>
          <div className='grid justify-center'>
            <button
              className='outline outline-black outline-2 rounded font-semibold px-4 py-2 bg-yellow-500'
              onClick={closeLegOptionsModal}
            >
              CLOSE
            </button>
          </div>
        </section>
      </article>
    </section>
  );
}

export default LegOptionsModal;
