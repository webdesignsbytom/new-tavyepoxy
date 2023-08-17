import React, { useState } from 'react';
import LogoImage from '../../assets/images/logos/logo.jpg';

function EdgeDropdownMenu({ handleEdgeTypeChange }) {
  const [edgeTypeOptions, setEdgeTypeOptions] = useState([
    { value: 'square_edge', label: 'Square edge', image: LogoImage },
    { value: 'rounded_edge', label: 'Rounded edge', image: LogoImage },
    { value: 'angled_edge', label: 'Angled edge', image: LogoImage },
  ]);
  const [selectedEdgeType, setSelectedEdgeType] = useState({
    value: 'square_edge',
    label: 'Square edge',
    image: LogoImage,
  });

  const [toggleEdgeTypeMenu, setToggleEdgeTypeMenu] = useState(false);

  const toggleMenuOpenClosed = () => {
    setToggleEdgeTypeMenu(!toggleEdgeTypeMenu);
  };

  return (
    <section className='relative'>
      <article className='grid grid-cols-aaa' onClick={toggleMenuOpenClosed}>
        <div>
          <p>{selectedEdgeType.label}</p>
        </div>
        <div>
          <img
            className='w-[25px]'
            src={selectedEdgeType.image}
            alt={selectedEdgeType.label}
          />
        </div>
        <div>
          <span className='no__highlights'>⮟</span>
        </div>
      </article>
      {toggleEdgeTypeMenu && (
        <section className='outline outline-2 outline-black rounded-xl p-1 absolute bg-white w-full'>
          {edgeTypeOptions.map((option, index) => {
            console.log('option', option);
            return (
              <article
                key={index}
                id={option.value}
                name={option.value}
                className='bg-white grid grid-cols-rev'
              >
                <div>
                  <p>{option.label}</p>
                </div>
                <div>
                  <img
                    className='w-[25px]'
                    src={option.image}
                    alt={option.label}
                  />
                </div>
              </article>
            );
          })}
        </section>
      )}
    </section>
  );
}

export default EdgeDropdownMenu;
