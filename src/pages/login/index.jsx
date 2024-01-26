import React, { useState } from 'react';
import './styles.css';
import TextField from '@mui/material/TextField';
import login from '../../images/img_login.svg';
import DefaultButton from '../../components/default-button';
import { primaryButtonTheme } from '../../mui-theme/buttons';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailInput = (event) => {
    const { value } = event.target;
    setEmail(value);
    console.log(value);
  };

  const handlePasswordInput = (event) => {
    const { value } = event.target;
    setPassword(value);
    console.log(value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div>
      <div>
        <img src={login} alt="Imagem de login" style={{ width: '28%' }} />
        <h1> Entre no Orange Portfólio </h1>
        <h2> Faça login com email </h2>

        <form onSubmit={handleFormSubmit}>
          <div className="email">
            <TextField
              className="text-field"
              label="Email address"
              placeholder="email@email.com"
              type="email"
              fullWidth
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
              value={email}
              onChange={handleEmailInput}
            />
          </div>
          <div className="key">
            <TextField
              label="Password"
              title="Password"
              placeholder="*************"
              defaultValue=""
              type="password"
              fullWidth
              InputLabelProps={{
                shrink: true,
              }}
              value={password}
              onChange={handlePasswordInput}
            />
          </div>
          <div className="buttonOrange">
            <DefaultButton theme={primaryButtonTheme} label="Entrar" type="submit" fullWidth />
          </div>
        </form>

        <h3>
          <a href="/register">Cadastre-se</a>
        </h3>
      </div>
    </div>
  );
}

export default Login;
