import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from './pages/register';
import HomePage from './pages/HomePage/HomePage';
import Login from './pages/Login';
import Explore from './pages/Explore/Explore';
import AuthProvider from './context/AuthProvider/authProvider';
import ProjectsProvider from './context/AuthProvider/projectsProvider';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/"
          element={(
            <AuthProvider>
              <ProjectsProvider>
                <HomePage />
              </ProjectsProvider>
            </AuthProvider>
        )}
        />
        <Route
          path="/explore"
          element={(
            <AuthProvider>
              <ProjectsProvider>
                <Explore />
              </ProjectsProvider>
            </AuthProvider>
          )}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
