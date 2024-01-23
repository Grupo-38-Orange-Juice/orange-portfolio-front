import React from 'react';
import './App.css';
import DefaultButton from './components/default-button';
import { primaryButtonTheme, secondaryButtonTheme } from './mui-theme/buttons';

function App() {
  return (
    <div className="App">
      <DefaultButton
        theme={primaryButtonTheme}
        label="Primary Button"
      />
      <DefaultButton
        theme={secondaryButtonTheme}
        label="Secundary Button"
      />
    </div>
  );
}

export default App;
