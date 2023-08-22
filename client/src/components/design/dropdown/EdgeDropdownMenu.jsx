import React, { useState } from 'react';
// Images
import SquareEdge from '../../../assets/images/design/sq_edge.jpg';
import RoundedEdge from '../../../assets/images/design/rounded_edge.jpg';
import AngledEdge from '../../../assets/images/design/angled_edge.jpg';

function EdgeDropdownMenu({ handleEdgeTypeChange }) {
  const [edgeTypeOptions] = useState([
    { id: 0, value: 'square_edge', label: 'Square edge', image: SquareEdge },
    { id: 1, value: 'rounded_edge', label: 'Rounded edge', image: RoundedEdge },
    { id: 2, value: 'angled_edge', label: 'Angled edge', image: AngledEdge },
  ]);

  const [selectedEdgeType, setSelectedEdgeType] = useState({
    id: 0,
    value: 'square_edge',
    label: 'Square edge',
    image: SquareEdge,
  });

  const [toggleEdgeTypeMenu, setToggleEdgeTypeMenu] = useState(false);

  const selectEdgeType = (id) => {
    console.log('id', id);

    let selection = edgeTypeOptions[id];

    setSelectedEdgeType(selection);

    setToggleEdgeTypeMenu(false)
  };

  const toggleMenuOpenClosed = () => {
    setToggleEdgeTypeMenu(!toggleEdgeTypeMenu);
  };

  return (
    <section className='relative'>
      <article
        className='grid grid-cols-aaa outline outline-2 outline-black rounded bg-gray-100'
        onClick={toggleMenuOpenClosed}
      >
        <div className='grid items-center'>
          <p className='text-sm font-medium pl-2'>{selectedEdgeType.label}</p>
        </div>
        <div className='grid items-center'>
          <img
            className='w-[60px]'
            src={selectedEdgeType.image}
            alt={selectedEdgeType.label}
          />
        </div>
        <section className='grid justify-end'>
          <div className='bg-slate-400 w-[40px] cursor-pointer grid items-center justify-center'>
            <span className='no__highlights text-xl'>⮟</span>
          </div>
        </section>
      </article>
      {toggleEdgeTypeMenu && (
        <section className='outline outline-2 outline-black rounded-xl absolute bg-white w-full mt-1 overflow-hidden'>
          {edgeTypeOptions.map((option, index) => {
            console.log('option', option);
            return (
              <article
                key={index}
                id={option.value}
                name={option.value}
                onClick={() => selectEdgeType(option.id)}
                className='bg-white p-1 grid grid-cols-rev hover:bg-blue-500 cursor-pointer'
              >
                <div>
                  <p>{option.label}</p>
                </div>
                <div className='pr-2'>
                  <img
                    className='w-[50px]'
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
