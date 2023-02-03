import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import { Global } from './styles/globalStyle';

export default  function App() {
  return (
    <Global >
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </Global>
  );
}
