import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Router from './routes';
import reportWebVitals from './reportWebVitals';
import { GoogleOAuthProvider } from '@react-oauth/google'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <GoogleOAuthProvider clientId="849871705623-0qhbvcmqrp8stc01spheeeo88jvkdqr5.apps.googleusercontent.com">
    <React.StrictMode>
      <Router />
    </React.StrictMode>,
  </GoogleOAuthProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()