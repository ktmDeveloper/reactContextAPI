import React, { useState, createContext } from "react";

export const OpenContext = createContext();

export const OpenProvider = props => {
  const [openIdx, setOpenIdx] = useState(null);
  return (
    <OpenContext.Provider value={[openIdx, setOpenIdx]}>
      {props.children}
    </OpenContext.Provider>
  );
};
