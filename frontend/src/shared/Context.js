import React, { useState, createContext } from "react";

export const initialState = {};

const AppContext = createContext(initialState);
const AppProvider = ({ children }) => {
  const [state, setState] = useState(initialState);
  return (
    <AppContext.Provider value={{ state, setState }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
