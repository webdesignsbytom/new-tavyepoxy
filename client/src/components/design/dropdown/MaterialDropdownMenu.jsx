import React, { useState } from 'react'
import { MaterialsAvailable } from '../../../utils/data/MaterialData';

function MaterialDropdownMenu() {
    const [selectedMaterial, setSelectedMaterial] = useState(
        { id: 0, value: 'mdf', label: 'MDF' },
    );

    const [materialOptions, setMaterialOptions] = useState(MaterialsAvailable)

    const [toggleEdgeTypeMenu, setToggleEdgeTypeMenu] = useState(false);
  
    const toggleMenuOpenClosed = () => {
      setToggleEdgeTypeMenu(!toggleEdgeTypeMenu);
    };

  return (
    <section className='relative'>
      <article
        className='grid grid-cols-rev outline outline-2 outline-black rounded bg-gray-100'
        onClick={toggleMenuOpenClosed}
      >
        <div className='grid items-center text-sm pl-2'>
          <span>Material</span>
        </div>
        <section className='grid justify-end'>
          <div className='bg-slate-400 cursor-pointer w-[40px] grid items-center justify-center'>
            <span className='no__highlights text-xl'>⮟</span>
          </div>
        </section>
      </article>
      {toggleEdgeTypeMenu && (
        <section className='outline outline-2 outline-black rounded absolute bg-white w-full mt-1 overflow-hidden'>
          {materialOptions.map((option, index) => {
            console.log('option', option);
            return (
              <article
                key={index}
                id={option.value}
                name={option.value}
                className='bg-white p-1 grid grid-cols-rev hover:bg-blue-500 cursor-pointer'
              >
                <div className='grid items-center pl-2'>
                  <p className='text-xs'>{option.label}</p>
                </div>
                <div className='pr-2'>
                  <div style={{ backgroundColor: option.hex }} className={`h-[18px] w-[18px] outline outline-1 outline-black`}></div>
                </div>
              </article>
            );
          })}
        </section>
      )}
    </section>
  )
}

export default MaterialDropdownMenu