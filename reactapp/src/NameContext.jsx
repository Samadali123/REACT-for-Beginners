import React, { createContext, useState } from 'react';

// Create context outside the component
export const NameContext = createContext();

const NameProvider = ({ children }) => {
  const [name, setName] = useState("syed samad ali");

  return (
    <NameContext.Provider value={{ name, setName }}>
      {children}
    </NameContext.Provider>
  );
};

export default NameProvider;
