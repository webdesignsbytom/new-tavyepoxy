import React, { useContext, useState } from 'react';
// Data
import { InitialMaterialSelection, MaterialsAvailable } from '../../../utils/data/MaterialData';
// Context
import { DesignContext } from '../../../context/DesignContext';

function MaterialDropdownMenu() {
  const { setDesignDimensionsAndData, designDimensionsAndData, selectedMaterial, setSelectedMaterial } =
    useContext(DesignContext);

  const [materialOptions] = useState(MaterialsAvailable);
  const [toggleMaterialOptions, setToggleMaterialOptions] = useState(false);
  const [enterCustomMaterialData, setEnterCustomMaterialData] = useState('');

  const toggleMenuOpenClosed = () => {
    setToggleMaterialOptions(!toggleMaterialOptions);
  };

  const selectMaterialType = (id) => {
    console.log('id', id);
    console.log('id', id);
    let selection = materialOptions[id];
console.log('section', selection);
    setSelectedMaterial(selection);

    setToggleMaterialOptions(false);

    setDesignDimensionsAndData({
      ...designDimensionsAndData,
      material: selection.value,
    });
  };

  const submitCustomMaterial = () => {
    if (enterCustomMaterialData === '') {
      return;
    } else {
      setSelectedMaterial({
        id: 'custom',
        value: enterCustomMaterialData,
        label: enterCustomMaterialData,
      });
    }

    setToggleMaterialOptions(false);
    setDesignDimensionsAndData({
      ...designDimensionsAndData,
      material: enterCustomMaterialData,
    });
  };

  const handleCustomChange = (event) => {
    const { value } = event.target;

    setEnterCustomMaterialData(value);
  };
  console.log('designDimensionsAndData', designDimensionsAndData);
  return (
    <section className='relative'>
      <article
        className='grid grid-cols-rev outline outline-2 outline-black rounded bg-gray-100'
        onClick={toggleMenuOpenClosed}
      >
        <div className='grid items-center text-sm pl-2'>
          <span>{selectedMaterial.label} </span>
        </div>
        <section className='grid justify-end'>
          <div className='bg-slate-400 cursor-pointer w-[40px] grid items-center justify-center'>
            <span className='no__highlights text-xl'>⮟</span>
          </div>
        </section>
      </article>
      {toggleMaterialOptions && (
        <section className='outline outline-2 outline-black rounded absolute z-10 bg-white w-full mt-1 overflow-hidden'>
          {materialOptions.map((option, index) => {
            console.log('option', option);
            return (
              <article
                key={index}
                id={option.value}
                name={option.value}
                onClick={() => selectMaterialType(option.id)}
                className='bg-white p-1 grid grid-cols-rev hover:bg-blue-500 cursor-pointer'
              >
                <div className='grid items-center pl-2'>
                  <p className='text-xs'>{option.label}</p>
                </div>
              </article>
            );
          })}
          <article
            id='custom_material'
            name='custom_material'
            className='bg-white p-1 grid grid-cols-rev hover:bg-blue-500 cursor-pointer'
          >
            <section className='grid relative'>
              <div className='w-full'>
                <input
                  type='text'
                  onChange={handleCustomChange}
                  placeholder='Enter custom...'
                  className='outline-1 outline outline-black rounded w-full p-1'
                />
              </div>
              <div className='grid absolute right-0 h-full p-[2px]'>
                <button
                  onClick={submitCustomMaterial}
                  className='bg-slate-400 text-sm px-2 outline outline-black outline-1 rounded active:scale-95 active:duration-200'
                >
                  Submit
                </button>
              </div>
            </section>
          </article>
        </section>
      )}
    </section>
  );
}

export default MaterialDropdownMenu;
