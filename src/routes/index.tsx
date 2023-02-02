import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/home';

export default function AllRoutes(): JSX.Element {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
    </Routes>
  );
}
