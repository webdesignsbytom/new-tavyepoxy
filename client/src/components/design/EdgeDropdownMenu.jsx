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

  const handleChange = (event) => {
    // const newValue = event.target.value;
    // setSelectedValue(newValue);
    // handleEdgeTypeChange(newValue);
  };

  const toggleMenuOpenClosed = () => {
    setToggleEdgeTypeMenu(!toggleEdgeTypeMenu);
  };

  return (
    <section>
      <div>
        <p>hell</p>
      </div>
      <article onClick={toggleMenuOpenClosed}>
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
      </article>
      <section>
        {toggleEdgeTypeMenu &&
          edgeTypeOptions.map((option, index) => {
            console.log('option', option);
            return (
              <div key={index}>
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
              </div>
            );
          })}
      </section>
    </section>
  );
}

export default EdgeDropdownMenu;
