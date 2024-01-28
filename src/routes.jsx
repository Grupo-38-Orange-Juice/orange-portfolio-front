import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login/index';
import Register from './pages/register';
import HomePage from './pages/HomePage/HomePage';
import Teste from './components/Menu/menu';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/teste" element={<Teste />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
