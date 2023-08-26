import React, { useContext, useEffect, useState } from 'react';
// Components
import Navbar from '../../components/nav/Navbar';
import DimensionsData from '../../components/design/DimensionsData';
import CanvasDesignTool from '../../components/design/CanvasDesignTool';
import LegOptionsModal from '../../components/design/modal/LegOptionsModal';
import EpoxyFinishOptions from '../../components/design/modal/EpoxyFinishOptions';
import MaterialsData from '../../components/design/MaterialsData';
import SelectionRow from '../../components/design/rows/SelectionRow';
import CheckboxSelectionData from '../../components/design/CheckboxSelectionData';
import QuoteAndSaveRow from '../../components/design/rows/QuoteAndSaveRow';
import ColourAndEdgeRow from '../../components/design/rows/ColourAndEdgeRow';
// Context
import { ToggleContext } from '../../context/ToggleContext';
// Data
import { PriceData } from '../../utils/data/PricingData';
import { DesignContext } from '../../context/DesignContext';
import ConfirmColourClear from '../../components/design/modal/ConfirmColourClear';
import ConfirmReset from '../../components/design/modal/ConfirmReset';
// Images

function DesignPage() {
  const {
    setActiveNav,
    toggleColourModal,
    toggleResetModal,
    openLegOptionsModal,
    closeLegOptionsModal,
    openFinishOptionsModal,
    closeFinishOptionsModal,
    toggleLegOptions,
    toggleFinishOptions,
  } = useContext(ToggleContext);
  const {
    designDimensionsAndData,
    setDesignDimensionsAndData,
    designQuoteData,
    setDesignQuoteData,
  } = useContext(DesignContext);

  const [colourAddedByUser, setColourAddedByUser] = useState('');

  useEffect(() => {
    setActiveNav('/design');
  }, []);

  useEffect(() => {
    let total = designQuoteData.startingQuote;

    if (designDimensionsAndData.stone_edge) {
      total += PriceData.stone_edge;
    }
    if (designDimensionsAndData.coasters) {
      total += PriceData.coasters;
    }
    if (designDimensionsAndData.protection) {
      total += PriceData.protection;
    }

    setDesignQuoteData({
      ...designQuoteData,
      finalQuote: total,
    });
  }, [designDimensionsAndData]);

  const addNewColourToList = () => {
    let newList = designDimensionsAndData.colours;
    newList.push(colourAddedByUser);

    setDesignDimensionsAndData({
      ...designDimensionsAndData,
      colours: newList,
    });

    setColourAddedByUser('');
  };

  // Event handler for checkbox changes
  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setDesignDimensionsAndData((prevData) => ({
      ...prevData,
      [name]: checked,
    }));
  };

  const handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    setDesignDimensionsAndData({
      ...designDimensionsAndData,
      [name]: value,
    });
  };

  const handleColourAddChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;

    setColourAddedByUser({
      ...colourAddedByUser,
      [name]: value,
    });
  };

  const handleEdgeTypeChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;

    // setColourAddedByUser({
    //   ...colourAddedByUser,
    //   [name]: value,
    // });
  };

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
        <section className='lg:w-3/4 mx-auto mt-2 mb-2 px-4 lg:px-0'>
          <section className='grid relative h-full md:grid-cols-2 gap-2'>
            {toggleColourModal && <ConfirmColourClear />}
            {toggleResetModal && <ConfirmReset />}

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
                designDimensionsAndData={designDimensionsAndData}
              />
            </div>
            <div>
              <section>
                <article className='text-center font-semibold'>
                  <h3>Choose your material and style</h3>
                </article>
                {/* Dimensions */}
                <DimensionsData handleChange={handleChange} />

                {/* Materials */}
                <MaterialsData handleChange={handleChange} />

                {/* Row of selections */}
                {/* Epoxy and legs */}
                <SelectionRow
                  openFinishOptionsModal={openFinishOptionsModal}
                  openLegOptionsModal={openLegOptionsModal}
                />

                {/* New row */}
                {/* Colours */}
                <ColourAndEdgeRow handleEdgeTypeChange={handleEdgeTypeChange} />

                <CheckboxSelectionData
                  handleCheckboxChange={handleCheckboxChange}
                />

                <QuoteAndSaveRow designQuoteData={designQuoteData} />
              </section>
            </div>
          </section>
        </section>
      </main>
    </div>
  );
}

export default DesignPage;
