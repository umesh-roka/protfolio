// import React, { createContext, useRef } from 'react'

// const RefContext = createContext();
// const RefProvider = ({child}) => {
//   const refs ={
//     ref1:useRef(null),
//     ref2:useRef(null),
//     ref3:useRef(null),
//     ref4:useRef(null),
//   }
//   return (
//     <RefContext.Provider value = {refs}>
//       {child}
//     </RefContext.Provider>
//   )
// }

// export {RefContext,RefProvider};



// src/RefContext.js
import React, { createContext, useRef } from 'react';

const RefContext = createContext();

const RefProvider = ({ children }) => {
  const sectionRefs = {
    services: useRef(null),
    contact: useRef(null),
    skills: useRef(null),
  };

  return (
    <RefContext.Provider value={sectionRefs}>
      {children}
    </RefContext.Provider>
  );
};

export { RefContext, RefProvider };

