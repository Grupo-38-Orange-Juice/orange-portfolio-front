import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from './pages/register';
import TesteDeModais from './pages/Teste/PageTesteModais';
import HomePage from './pages/HomePage/HomePage';
import Login from './pages/Login';
import AdicionarProjeto from './components/PortfolioRegistration/portfolioRegistration';
import AuthProvider from './context/AuthProvider/authProvider';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/teste" element={<TesteDeModais />} />
        <Route
          path="/"
          element={(
            <AuthProvider>
              <HomePage />
            </AuthProvider>
        )}
        />
        <Route
          path="/adicionarprojeto"
          element={(
            <AuthProvider>
              <AdicionarProjeto />
            </AuthProvider>
          )}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
