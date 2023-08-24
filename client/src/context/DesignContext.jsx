import React from 'react';
import { useState } from 'react';
import { InitialDesignData } from '../utils/data/PricingData';

export const DesignContext = React.createContext();

const DesignContextProvider = ({ children }) => {
  const [designDimensionsAndData, setDesignDimensionsAndData] =
    useState(InitialDesignData);
    
  const [designColourList, setDesignColourList] = useState([]);

  const [designQuoteData, setDesignQuoteData] = useState({
    finalQuote: 0,
    startingQuote: designDimensionsAndData.quote,
  });

  return (
    <DesignContext.Provider
      value={{
        designDimensionsAndData,
        setDesignDimensionsAndData,
        designColourList,
        setDesignColourList,
        designQuoteData,
        setDesignQuoteData,
      }}
    >
      {children}
    </DesignContext.Provider>
  );
};

export default DesignContextProvider;
