import React from 'react';
import AppRouter from './routes/AppRouter.routes';
import ModalContext from './context/ModalContext';
import './app.scss';

const App = () => {
  return (
    <ModalContext>
      <AppRouter />
    </ModalContext>
  );
};

export default App;
