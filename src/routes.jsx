import React from 'react';
import {
  BrowserRouter, Routes, Route,
} from 'react-router-dom';
import Home from './pages/homePage/home';

// function ProtectedRoutes(element) {
//   return element;
// }

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home />} path="/" />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
