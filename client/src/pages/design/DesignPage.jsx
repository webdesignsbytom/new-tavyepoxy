import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
// Components
import Navbar from '../../components/nav/Navbar';
// Context
import { ToggleContext } from '../../context/ToggleContext';
import CanvasDesignTool from '../../components/design/CanvasDesignTool';
import LegOptionsModal from '../../components/design/LegOptionsModal';
import EpoxyFinishOptions from '../../components/design/EpoxyFinishOptions';
import ColourTag from '../../components/design/ColourTag';
// Images

function DesignPage() {
  const { setActiveNav } = useContext(ToggleContext);

  const [tableDimensionsAndData, setTableDimensionsAndData] = useState({
    length: 856,
    width: 555,
    thickness: 25,
    material: 'MDF',
    finish: 'marble',
    colours: ['Black', 'Bronze', 'Silver', 'Parchment', 'Brown'],
    legs: 'Standard fit 30cm high 2 prong hairpin legs',
    quote: 220,
  });

  const [testf, setTestf] = useState(['one', 'two', 'three', 'four'])

  const [toggleCustomThickness, setToggleCustomThickness] = useState(false);
  const [toggleLegOptions, setToggleLegOptions] = useState(false);
  const [toggleFinishOptions, setToggleFinishOptions] = useState(false);

  const [colourAddedByUser, setColourAddedByUser] = useState('');

  console.log('tableDimensionsAndData', tableDimensionsAndData);
  console.log('toggleCustomThickness', toggleCustomThickness);

  const navigate = useNavigate();

  useEffect(() => {
    setActiveNav('/design');
  }, []);

  const addNewColourToList = () => {
    let newList = tableDimensionsAndData.colours;
    newList.push(colourAddedByUser);

    setTableDimensionsAndData({
      ...tableDimensionsAndData,
      colours: newList,
    });

    setColourAddedByUser('');
  };

  const openLegOptionsModal = () => {
    setToggleLegOptions(true);
  };

  const closeLegOptionsModal = () => {
    setToggleLegOptions(false);
  };

  const openFinishOptionsModal = () => {
    setToggleFinishOptions(true);
  };

  const closeFinishOptionsModal = () => {
    setToggleFinishOptions(false);
  };

  const handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    setTableDimensionsAndData({
      ...tableDimensionsAndData,
      [name]: value,
    });

    if (value === 'custom') {
      setToggleCustomThickness(true);
    }
  };

  const handleColourAddChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;

    setColourAddedByUser({
      ...colourAddedByUser,
      [name]: value,
    });
  };

  console.log('colourAddedByUser', colourAddedByUser);
  return (
    <div className='grid bg-gray-100 h-screen grid-rows-reg lg:overflow-hidden lg:max-h-screen'>
      <Navbar />
      {/* Main */}
      <main className='grid h-full grid-rows-reg'>
        <section className='lg:w-3/4 mx-auto mt-8'>
          <div className='pb-6 border-b-2 grid grid-cols-2 justify-between border-solid border-black'>
            <h2 className='text-2xl font-corgs font-medium'>
              Design your furniture
            </h2>
            <div className='grid justify-end'>
              <h3 className='italic text-xl'>Customise your dream piece</h3>
            </div>
          </div>
        </section>
        <section className='lg:w-3/4 mx-auto mt-2 mb-2'>
          <section className='grid relative h-full md:grid-cols-2 gap-2'>
            {toggleLegOptions && (
              <LegOptionsModal closeLegOptionsModal={closeLegOptionsModal} />
            )}
            {toggleFinishOptions && (
              <EpoxyFinishOptions
                closeFinishOptionsModal={closeFinishOptionsModal}
              />
            )}
            <div className='grid overflow-hidden bg-black h-full'>
              <CanvasDesignTool
                tableDimensionsAndData={tableDimensionsAndData}
              />
            </div>
            <div>
              <section>
                <article className='text-center font-semibold'>
                  <h3>Choose your material and style</h3>
                </article>
                <section className='grid grid-cols-3 gap-6 w-full outline outline-black outline-2 rounded my-2 p-1'>
                  <section className='grid'>
                    <div>
                      <p>Width</p>
                    </div>
                    <div className='w-min grid'>
                      <input
                        type='number'
                        className='w-[100px]'
                        value={tableDimensionsAndData.length}
                        onChange={handleChange}
                        name='length'
                        id='length'
                      />
                    </div>
                  </section>
                  <section className='grid'>
                    <div>
                      <p>Length</p>
                    </div>
                    <div className='w-full'>
                      <input
                        type='number'
                        className='w-[100px]'
                        value={tableDimensionsAndData.width}
                        onChange={handleChange}
                        name='width'
                        id='width'
                      />
                    </div>
                  </section>
                  <section className='grid'>
                    <div>
                      <p>Thickness</p>
                    </div>
                    <div className='w-full'>
                      <select
                        id='thickness'
                        name='thickness'
                        onChange={handleChange}
                        value={tableDimensionsAndData.thickness} // Corrected this line
                        required
                      >
                        <option value='25'>25mm (Standard)</option>
                        <option value='18'>18mm</option>
                        <option value='35'>35mm</option>
                        <option value='custom'>Custom</option>
                      </select>
                    </div>
                  </section>
                </section>

                {/* Materials */}
                <section className='grid grid-flow-col outline gap-2 outline-black outline-2 rounded p-1'>
                  <div>
                    <h4>Materials:</h4>
                  </div>
               
                    <div>
                      <select
                        id='material'
                        name='material'
                        onChange={handleChange}
                        value={tableDimensionsAndData.material} // Corrected this line
                        required
                      >
                        <option value='MDF'>MDF (Standard)</option>
                        <option value='Oak'>Oak</option>
                        <option value='Walnut'>Walnut</option>
                        <option value='Pine'>Pine</option>
                        <option value='Cherry'>Cherry</option>
                      </select>
                    </div>
                <div>
                  <input type='text' placeholder='Custom...' />
                  <button type='submit' value='colour'>+</button>
                </div>
                </section>

                {/* Row of selections */}
                <section className='grid grid-cols-2 outline gap-2 outline-black outline-2 rounded p-1 my-2'>
                  {/* Finish */}
                  <section className='grid'>
                    <div>
                      <h5 className='font-semibold'>Epoxy Finish</h5>
                    </div>

                    <div className='text-sm leading-5 h-full capitalize'>
                      <p>{tableDimensionsAndData.finish}</p>
                    </div>

                    <div className='w-full grid items-end'>
                      <button
                        onClick={openFinishOptionsModal}
                        className='py-2 px-4 w-full bg-slate-400 rounded h-fit font-semibold'
                      >
                        View Finish Options
                      </button>
                    </div>
                  </section>
                  {/* Legs */}
                  <section className='grid'>
                    <div>
                      <h5 className='font-semibold'>Leg style</h5>
                    </div>

                    <div className='text-sm leading-5 h-full capitalize'>
                      <p>{tableDimensionsAndData.legs}</p>
                    </div>

                    <div className='w-full grid items-end'>
                      <button
                        onClick={openLegOptionsModal}
                        className='py-2 px-4 w-full bg-slate-400 rounded h-fit font-semibold'
                      >
                        View Leg Options
                      </button>
                    </div>
                  </section>
                </section>

                {/* New row */}
                {/* Colours */}
                <section className='outline gap-2 outline-black outline-2 rounded p-1 my-2'>
                  <div>
                    <p>Customise Colours</p>
                  </div>
                  <div className='mb-2'>
                    <p>Selected:</p>
                    <section className='grid grid-flow-col w-full'>
                      {tableDimensionsAndData.colours.forEach((colour, index) => {
                          console.log('colour 1', colour);
                          return <ColourTag key={index} colour={colour} />;
                        }
                      )}
                    </section>
                  </div>
                  <div className='grid grid-cols-rev w-full gap-4'>
                    <div className='w-full'>
                      <input
                        type='text'
                        className='w-full'
                        name='colourAddedByUser'
                        id='colourAddedByUser'
                        onChange={handleColourAddChange}
                      />
                    </div>
                    <div className='w-min'>
                      <button
                        onClick={addNewColourToList}
                        className='outline outline-2 outline-black px-2'
                      >
                        Enter
                      </button>
                    </div>
                  </div>
                </section>

                <section className='outline gap-2 outline-black outline-2 rounded p-1 my-2'>
                  <div>
                    <h6>Quoted Price</h6>
                  </div>
                  <div className='bg-white outline outline-black outline-2 rounded p-2'>
                    <span>£{tableDimensionsAndData.quote}</span>
                  </div>
                </section>
              </section>
            </div>
          </section>
        </section>
      </main>
    </div>
  );
}

export default DesignPage;
