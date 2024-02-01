import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from './pages/register';
import Login from './pages/Login';
import HomePage from './pages/homePage/HomePage';
import AdicionarProjeto from './components/PortfolioRegistration/portfolioRegistration';
<<<<<<< HEAD
import ModalSaveProject from './components/PortfolioRegistration/modalAddProject';
=======
import AuthProvider from './context/AuthProvider/authProvider';
>>>>>>> 181fbe2dde7cfa6928a011693ff4a2ea7166ed23

function Router() {
  return (
    <BrowserRouter>
      <Routes>
<<<<<<< HEAD
        <Route path="/modaladd" element={<ModalSaveProject />} />
        <Route path="/adicionarprojeto" element={<AdicionarProjeto />} />
=======
>>>>>>> 181fbe2dde7cfa6928a011693ff4a2ea7166ed23
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
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
