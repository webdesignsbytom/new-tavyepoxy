import React from 'react';
import { useState } from 'react';

export const ToggleContext = React.createContext();

const ToggleContextProvider = ({ children }) => {
  const [toggleNavigation, setToggleNavigation] = useState(true);
  const [activeNav, setActiveNav] = useState('/');
  console.log('QQQQQQQQQQQQQQQQQQQQQQQQQQ ', toggleNavigation);

  const toggleNavbarOpenClosed = () => {
    console.log('Toggling XXXXXXXXXXXXXXXXXXXXXxxx');
    setToggleNavigation(!toggleNavigation);
  };

  return (
    <ToggleContext.Provider
      value={{
        toggleNavigation,
        toggleNavbarOpenClosed,
        activeNav,
        setActiveNav,
      }}
    >
      {children}
    </ToggleContext.Provider>
  );
};

export default ToggleContextProvider;
