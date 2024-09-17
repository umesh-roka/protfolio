
import React, { createContext, useRef } from 'react';

const RefContext = createContext();

const RefProvider = ({ children }) => {
  const sectionRefs = {
    services: useRef(null),
    contact: useRef(null),
    skills: useRef(null),
    about: useRef(null),
    projects:useRef(null)
  };

  return (
    <RefContext.Provider value={sectionRefs}>
      {children}
    </RefContext.Provider>
  );
};

export { RefContext, RefProvider };

