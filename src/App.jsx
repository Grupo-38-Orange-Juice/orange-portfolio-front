import React from 'react';
import DefaultButton from './components/default-button';
import { primaryButtonTheme, secondaryButtonTheme } from './mui-theme/buttons';
import Header from './components/header/header';

function App() {
  const handlePrimaryButtonClick = () => {
    console.log('Botão primário clicado!');
  };

  const handleSecondaryButtonClick = () => {
    console.log('Botão secundário clicado!');
  };
  return (
    <div className="App">
      <Header />
      <DefaultButton theme={primaryButtonTheme} label="Primary Button" handleClick={handlePrimaryButtonClick} />
      <DefaultButton theme={secondaryButtonTheme} label="Secundary Button" handleClick={handleSecondaryButtonClick} />
    </div>
  );
}

export default App;
