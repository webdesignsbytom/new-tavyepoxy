import React from 'react';
import { useState } from 'react';

export const ToggleContext = React.createContext();

const ToggleContextProvider = ({ children }) => {
  const [toggleNavigation, setToggleNavigation] = useState(false);
  const [toggleColourPicker, setToggleColourPicker] = useState(false);
  const [activeNav, setActiveNav] = useState('/');

  console.log('QQQQQQQQQQQQQQQQQQQQQQQQQQ ', toggleNavigation);

  const toggleNavbarOpenClosed = () => {
    console.log('Toggling XXXXXXXXXXXXXXXXXXXXXxxx');
    setToggleNavigation(!toggleNavigation);
  };

  const toggleColourPickerOpenClosed = () => {
    console.log('Toggling XXXXXXXXXXXXXXXXXXXXXxxx');
    setToggleColourPicker(!toggleColourPicker);
  };
  console.log('toggleColourPicker', toggleColourPicker);
  return (
    <ToggleContext.Provider
      value={{
        toggleNavigation,
        toggleNavbarOpenClosed,
        activeNav,
        setToggleNavigation,
        setActiveNav,
        toggleColourPicker,
        setToggleColourPicker,
        toggleColourPickerOpenClosed,
      }}
    >
      {children}
    </ToggleContext.Provider>
  );
};

export default ToggleContextProvider;
