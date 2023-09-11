import React, { useEffect, useState } from 'react';
// Data
import { InitialDesignData } from '../utils/data/PricingData';
import { InitialMaterialSelection } from '../utils/data/MaterialData';

export const DesignContext = React.createContext();

const DesignContextProvider = ({ children }) => {
  const [designDimensionsAndData, setDesignDimensionsAndData] =
    useState(InitialDesignData);

  const [designColourList, setDesignColourList] = useState([]);

  const [squareMeterOfDesignList, setSquareMeterOfDesignList] = useState('');

  const [selectedColoursArr, setSelectedColoursArr] = useState(
    InitialDesignData.colours
  );
  const [selectedMaterial, setSelectedMaterial] = useState(
    InitialMaterialSelection
  );

  const [designQuoteData, setDesignQuoteData] = useState({
    finalQuote: 0,
    startingQuote: designDimensionsAndData.quote,
    materialsQuote: 0
  });

  const [selectedThickness, setSelectedThickness] = useState({
    label: designDimensionsAndData.thickness,
  });
  
  return (
    <DesignContext.Provider
      value={{
        designDimensionsAndData,
        setDesignDimensionsAndData,
        selectedColoursArr,
        setSelectedColoursArr,
        designColourList,
        setDesignColourList,
        designQuoteData,
        setDesignQuoteData,
        selectedMaterial,
        setSelectedMaterial,
        selectedThickness,
        setSelectedThickness,
        squareMeterOfDesignList,
        setSquareMeterOfDesignList,
      }}
    >
      {children}
    </DesignContext.Provider>
  );
};

export default DesignContextProvider;
