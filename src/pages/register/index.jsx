import React, { useState } from 'react';
import './styles.css';
import TextField from '@mui/material/TextField';
import registerImage from '../../images/img_cadastro.png';
import DefaultButton from '../../components/default-button';
import { primaryButtonTheme } from '../../mui-theme/buttons';

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailInput = (event) => {
    setEmail(event.target.value);
    console.log(email);
  };

  const handlePasswordInput = (event) => {
    setPassword(event.target.value);
    console.log(password);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div>
      <div>
        <img src={registerImage} alt="Imagem de registro" style={{ width: '28%' }} />
        <h1> Crie sua conta no Orange Portfólio </h1>
        <h2> Cadastre-se com seu email </h2>

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
            <DefaultButton theme={primaryButtonTheme} label="Registrar" type="submit" fullWidth />
          </div>
        </form>

        <h3>
          Já tem uma conta?
          <a href="/login">Faça login</a>
        </h3>
      </div>
    </div>
  );
}

export default Register;
