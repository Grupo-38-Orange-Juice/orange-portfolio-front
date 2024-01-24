import React from 'react';
import {
  BrowserRouter, Routes, Route,
} from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';

// function ProtectedRoutes(element) {
//   return element;
// }

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
