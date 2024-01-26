import React, { useState } from 'react';
import './styles.css';
import TextField from '@mui/material/TextField';
import registerImage from '../../images/img_cadastro.png';
import DefaultButton from '../../components/default-button';
import { primaryButtonTheme } from '../../mui-theme/buttons';

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');

  const handleNomeInput = (event) => {
    const { value } = event.target;
    setNome(value);
    console.log(value);
  };

  const handleSobrenomeInput = (event) => {
    const { value } = event.target;
    setSobrenome(value);
    console.log(value);
  };

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
    console.log('Dados do formulário:');
    console.log('Nome:', nome);
    console.log('Sobrenome:', sobrenome);
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div>
      <div>
        <img src={registerImage} alt="Imagem de registro" style={{ width: '28%' }} />
        <h1> Cadastre-se </h1>
        <form onSubmit={handleFormSubmit}>
          <div className="nome-sobrenome-container">
            <div className="nome">
              <TextField
                className="text-field"
                label="Nome"
                placeholder="Digite seu nome"
                type="text"
                InputLabelProps={{
                  shrink: true,
                }}
                value={nome}
                onChange={handleNomeInput}
              />
            </div>
            <div className="sobrenome">
              <TextField
                className="text-field"
                label="Sobrenome"
                placeholder="Digite seu sobrenome"
                type="text"
                InputLabelProps={{
                  shrink: true,
                }}
                value={sobrenome}
                onChange={handleSobrenomeInput}
              />
            </div>
          </div>
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
          <a href="/login"> Faça login</a>
        </h3>
      </div>
    </div>
  );
}

export default Register;
