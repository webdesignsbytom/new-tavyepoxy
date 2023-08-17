import React, { useEffect, useState, useRef } from 'react';
import LogoImage from '../../assets/images/logos/logo.jpg';

function TestPage() {
  const [edgeTypeOptions, setEdgeTypeOptions] = useState([
    { value: 'square_edge', label: 'Square edge', image: LogoImage },
    { value: 'rounded_edge', label: 'Rounded edge', image: LogoImage },
    { value: 'angled_edge', label: 'Angled edge', image: LogoImage },
  ]);

  const handleChange = (event) => {
    // const newValue = event.target.value;
    // setSelectedValue(newValue);
    // handleEdgeTypeChange(newValue);
  };

  return (
    <section>
      helllo
      <div>
        {edgeTypeOptions?.map((option, index) => {
          console.log('option', option);
          return (
            <div key={index}>
              <div>
                <p className='text-xl text-red-700'>{option.label}</p>
              </div>
              <div>
                <img src={option.image} alt={option.label} />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default TestPage;
