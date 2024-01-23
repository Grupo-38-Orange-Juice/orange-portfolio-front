import logo from './logo.svg';
import './App.css';
import DefaultButton from './components/default-button';
import { primaryButtonTheme, secondaryButtonTheme } from './mui-theme/buttons';

function App() {
  const handlePrimaryButtonClick = () => {
    console.log("Botão primário clicado!");
  };

  const handleSecondaryButtonClick = () => {
    console.log("Botão secundário clicado!");
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <DefaultButton theme={primaryButtonTheme} label="Primary Button" handleClick={handlePrimaryButtonClick} />
      <DefaultButton theme={secondaryButtonTheme} label="Secundary Button" handleClick={handleSecondaryButtonClick} />
    </div>
  );
}

export default App;
