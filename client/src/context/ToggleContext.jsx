import React from 'react';
import { useState } from 'react';

export const ToggleContext = React.createContext();

const ToggleContextProvider = ({ children }) => {
  const [toggleNavigation, setToggleNavigation] = useState(false);
  const [toggleColourPicker, setToggleColourPicker] = useState(false);
  const [toggleColourModal, setToggleColourModal] = useState(false);
  const [toggleResetModal, setToggleResetModal] = useState(false);
  const [toggleLegOptions, setToggleLegOptions] = useState(false);
  const [toggleFinishOptions, setToggleFinishOptions] = useState(false);
  const [activeNav, setActiveNav] = useState('/');

  const toggleNavbarOpenClosed = () => {
    setToggleNavigation(!toggleNavigation);
  };

  const toggleColourPickerOpenClosed = () => {
    setToggleColourPicker(!toggleColourPicker);
  };

  const toggleResetColoursOpen = () => {
    setToggleColourModal(true);
  };

  const toggleResetColoursClosed = () => {
    setToggleColourModal(false);
  };

  const toggleResetAllOpen = () => {
    setToggleResetModal(true);
  };

  const toggleResetAllClosed = () => {
    setToggleResetModal(false);
  };

  const openLegOptionsModal = () => {
    setToggleLegOptions(true);
  };

  const closeLegOptionsModal = () => {
    setToggleLegOptions(false);
  };

  const openFinishOptionsModal = () => {
    setToggleFinishOptions(true);
  };

  const closeFinishOptionsModal = () => {
    setToggleFinishOptions(false);
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
        toggleColourModal,
        setToggleColourModal,
        toggleResetModal,
        toggleResetColoursOpen,
        toggleResetColoursClosed,
        toggleResetAllOpen,
        toggleResetAllClosed,
        setToggleResetModal,
        openLegOptionsModal,
        closeLegOptionsModal,
        openFinishOptionsModal,
        closeFinishOptionsModal,
        toggleLegOptions,
toggleFinishOptions
      }}
    >
      {children}
    </ToggleContext.Provider>
  );
};

export default ToggleContextProvider;
