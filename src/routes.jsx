import React from 'react';
import {
  BrowserRouter, Routes, Route,
} from 'react-router-dom';
import HomePage from './pages/homePage/HomePage';
import Login from './pages/Login/Login';
import Explore from './pages/Explore/Explore';
// function ProtectedRoutes(element) {
//   return element;
// }

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/">
          <Route index element={<HomePage />} />
          <Route path="/Explore" element={<Explore />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default Router;
