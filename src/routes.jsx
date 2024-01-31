import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from './pages/register';
import Login from './pages/Login';
import HomePage from './pages/HomePage/HomePage';
import AdicionarProjeto from './components/PortfolioRegistration/portfolioRegistration';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/adicionarprojeto" element={<AdicionarProjeto />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
