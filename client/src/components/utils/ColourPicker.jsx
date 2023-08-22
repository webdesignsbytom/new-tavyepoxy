import React, { useContext, useState } from 'react';
// Context
import { ToggleContext } from '../../context/ToggleContext';
import { RxCross2 } from 'react-icons/rx';
// Colour picker
import { SketchPicker } from 'react-color';

function ColourPicker({ selectedColoursArr, setSelectedColoursArr }) {
  const { toggleColourPickerOpenClosed } = useContext(ToggleContext);
  const [currentColour, setCurrentColour] = useState({
    hex: '#ff0000',
  });
  console.log('selectedColoursArr', selectedColoursArr);
  const setNewColour = (event) => {
    console.log('currentColour', currentColour);

    setSelectedColoursArr([
      ...selectedColoursArr,
      currentColour, // Add the currentColour to the array
    ]);
  };
  //     if (cardOrSwatch === 'card') {
  //       if (selectedCard === 'cardOneBg') {
  //         setCardOneBg(currentColour.hex);
  //         setHexCardOne(currentColour.hex);

  //         const newRgb = JSON.stringify(currentColour.rgb);
  //         const newHsl = JSON.stringify(currentColour.hsl);

  //         let rgb1 = newRgb.slice(1); // "ello World!";
  //         let rgb2 = rgb1.slice(0, -1); // "ello World!";
  //         var rgb3 = rgb2.replace(/"/g, '');
  //         var rgb4 = rgb3.replace(/,/g, ' ');
  //         setRgbCardOne(rgb4);

  //         let hsl1 = newHsl.slice(1); // "ello World!";
  //         let hsl2 = hsl1.slice(0, -1); // "ello World!";
  //         var hsl3 = hsl2.replace(/"/g, '');
  //         var hsl4 = hsl3.replace(/,/g, ' ');
  //         setHlsCardOne(hsl4);
  //       }
  //       if (selectedCard === 'cardTwoBg') {
  //         setCardTwoBg(currentColour.hex);
  //         setHexCardTwo(currentColour.hex);

  //         const newRgb = JSON.stringify(currentColour.rgb);
  //         const newHsl = JSON.stringify(currentColour.hsl);

  //         let rgb12 = newRgb.slice(1); // "ello World!";
  //         let rgb22 = rgb12.slice(0, -1); // "ello World!";
  //         var rgb32 = rgb22.replace(/"/g, '');
  //         var rgb42 = rgb32.replace(/,/g, ' ');
  //         setRgbCardTwo(rgb42);

  //         let hsl12 = newHsl.slice(1); // "ello World!";
  //         let hsl22 = hsl12.slice(0, -1); // "ello World!";
  //         var hsl32 = hsl22.replace(/"/g, '');
  //         var hsl42 = hsl32.replace(/,/g, ' ');
  //         setHlsCardTwo(hsl42);
  //       }
  //       if (selectedCard === 'cardThreeBg') {
  //         setCardThreeBg(currentColour.hex);
  //         setHexCardThree(currentColour.hex);

  //         const newRgb = JSON.stringify(currentColour.rgb);
  //         const newHsl = JSON.stringify(currentColour.hsl);

  //         let rgb13 = newRgb.slice(1); // "ello World!";
  //         let rgb23 = rgb13.slice(0, -1); // "ello World!";
  //         var rgb33 = rgb23.replace(/"/g, '');
  //         var rgb43 = rgb33.replace(/,/g, ' ');
  //         setRgbCardThree(rgb43);

  //         let hsl13 = newHsl.slice(1); // "ello World!";
  //         let hsl23 = hsl13.slice(0, -1); // "ello World!";
  //         var hsl33 = hsl23.replace(/"/g, '');
  //         var hsl43 = hsl33.replace(/,/g, ' ');
  //         setHlsCardThree(hsl43);
  //       }
  //       if (selectedCard === 'cardFourBg') {
  //         setCardFourBg(currentColour.hex);
  //         setHexCardFour(currentColour.hex);

  //         const newRgb = JSON.stringify(currentColour.rgb);
  //         const newHsl = JSON.stringify(currentColour.hsl);

  //         let rgb14 = newRgb.slice(1); // "ello World!";
  //         let rgb24 = rgb14.slice(0, -1); // "ello World!";
  //         var rgb34 = rgb24.replace(/"/g, '');
  //         var rgb44 = rgb34.replace(/,/g, ' ');
  //         setRgbCardFour(rgb44);

  //         let hsl14 = newHsl.slice(1); // "ello World!";
  //         let hsl24 = hsl14.slice(0, -1); // "ello World!";
  //         var hsl34 = hsl24.replace(/"/g, '');
  //         var hsl44 = hsl34.replace(/,/g, ' ');
  //         setHlsCardFour(hsl44);
  //       }
  //       if (selectedCard === 'cardFiveBg') {
  //         setCardFiveBg(currentColour.hex);
  //         setHexCardFive(currentColour.hex);

  //         const newRgb = JSON.stringify(currentColour.rgb);
  //         const newHsl = JSON.stringify(currentColour.hsl);

  //         let rgb15 = newRgb.slice(1); // "ello World!";
  //         let rgb25 = rgb15.slice(0, -1); // "ello World!";
  //         var rgb35 = rgb25.replace(/"/g, '');
  //         var rgb45 = rgb35.replace(/,/g, ' ');
  //         setRgbCardFive(rgb45);

  //         let hsl15 = newHsl.slice(1); // "ello World!";
  //         let hsl25 = hsl15.slice(0, -1); // "ello World!";
  //         var hsl35 = hsl25.replace(/"/g, '');
  //         var hsl45 = hsl35.replace(/,/g, ' ');
  //         setHlsCardFive(hsl45);
  //       }
  //       setDisplayPicker(false);
  //     }

  //   };

  const openPicker = (event) => {
    toggleColourPickerOpenClosed();
  };

  const closeColourPicker = () => {
    toggleColourPickerOpenClosed();
  };

  const handleChangeComplete = (color) => {
    setCurrentColour({ hex: color.hex, rgb: color.rgb, hsl: color.hsl });
  };
  return (
    <div className='z-10 -top-40 bg-white border-2 border-black border-solid dark:border-white dark:bg-black rounded p-1 absolute cursor-pointer dark:text-gray-100'>
      <div className='flex justify-end my-1'>
        <RxCross2 onClick={closeColourPicker} />
      </div>
      <SketchPicker color={currentColour.hex} onChange={handleChangeComplete} />
      <div className='flex justify-center my-2'>
        <button
          onClick={setNewColour}
          className={`py-1 px-3 dark:outline-gray-100 dark:text-gray-100 outline outline-black outline-1 rounded-lg hover:bg-red-500`}
        >
          SET COLOUR
        </button>
      </div>
    </div>
  );
}

export default ColourPicker;
