import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import { Box, Typography } from '@mui/material';
import { toast, ToastContainer } from 'react-toastify';
import DefaultButton from '../../components/default-button';
import { primaryButtonTheme } from '../../mui-theme/buttons';
import { createUser } from '../../service/api';
import registerImage from '../../images/img_cadastro.png';
import 'react-toastify/dist/ReactToastify.css';

function Register() {
  const [formValues, setFormValues] = useState({
    name: '',
    lastName: '',
    email: '',
    password: '',
  });

  const handleInputChanges = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const {
      name, lastName, email, password,
    } = formValues;

    const response = await createUser({ fullName: `${name} ${lastName}`, email, password });
    console.log(response);
    if (response.status === 201) {
      toast.success('Usuário cadastrado com sucesso!');
    } else {
      toast.error(response.data.message || 'Erro ao cadastrar usuário!');
    }
  };

  return (
    <Container
      maxWidth={false}
      style={{
        margin: '0', textAlign: 'center', display: 'flex', justifyContent: 'space-around', width: '100%', height: '100vh',
      }}
    >
      <Box
        style={{
          width: '100%',
          maxWidth: '450px',
          marginBottom: '0px',
          height: '100%',
          flex: '1',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '0px',
          overflow: 'hidden',
          visibility: window.innerWidth <= 700 ? 'hidden' : 'visible',
        }}
      >
        <img src={registerImage} alt="Imagem de registro" style={{ width: '100%', height: '100%' }} />
      </Box>
      <Box style={{
        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
      }}
      >
        <Typography
          variant="h3"
          style={{
            fontSize: '2rem', color: 'rgba(34, 34, 68, 1)', textAlign: 'center', fontFamily: 'Roboto', fontWeight: 400, lineHeight: '40px', marginTop: '12rem',
          }}
        >
          Cadastre-se
        </Typography>
        <form onSubmit={handleFormSubmit} style={{ width: '100%', maxWidth: '500px', margin: 'auto' }}>
          <TextField
            label="Nome"
            placeholder="Digite seu nome"
            type="text"
            InputLabelProps={{
              shrink: true,
            }}
            value={formValues.name}
            onChange={handleInputChanges}
            name="name"
            fullWidth
            style={{ marginBottom: '1rem' }}
          />
          <TextField
            label="Sobrenome"
            placeholder="Digite seu sobrenome"
            type="text"
            InputLabelProps={{
              shrink: true,
            }}
            value={formValues.lastName}
            onChange={handleInputChanges}
            name="lastName"
            fullWidth
            style={{ marginBottom: '1rem' }}
          />
          <TextField
            label="Email address"
            placeholder="email@email.com"
            type="email"
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            value={formValues.email}
            onChange={handleInputChanges}
            name="email"
            style={{ marginBottom: '1rem' }}
          />
          <TextField
            label="Password"
            placeholder="*************"
            defaultValue=""
            type="password"
            fullWidth
            InputLabelProps={{
              shrink: true,
            }}
            value={formValues.password}
            onChange={handleInputChanges}
            name="password"
            style={{ marginBottom: '1rem' }}
          />
          <DefaultButton theme={primaryButtonTheme} label="Entrar" onClick={handleFormSubmit} fullWidth />
        </form>
        <Typography
          variant="h3"
          style={{
            marginTop: '1rem', fontSize: '1.2rem', color: 'rgba(34, 34, 68, 1)', textAlign: 'center', fontFamily: 'Roboto', fontWeight: 400, lineHeight: '40px',
          }}
        >
          Já tem uma conta?
          {' '}
          <a href="/login"> Faça login</a>
        </Typography>
      </Box>
      <ToastContainer />
    </Container>
  );
}

export default Register;
