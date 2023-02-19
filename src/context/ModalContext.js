import React, { useState } from 'react';

export const Context = React.createContext();

const ModalContext = ({ children }) => {
  const [showModal, setShowModal] = useState(false);
  const [id, setID] = useState(null);
  return (
    <Context.Provider value={{ showModal, setShowModal, id, setID }}>
      {children}
    </Context.Provider>
  );
};

export default ModalContext;
