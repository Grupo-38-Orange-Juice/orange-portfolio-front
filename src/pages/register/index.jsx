import React, { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import { Box, Typography } from '@mui/material';
import { toast, ToastContainer } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import DefaultButton from '../../components/default-button';
import { primaryButtonTheme } from '../../mui-theme/buttons';
import { createUser } from '../../service/api';
import registerImage from '../../images/img_cadastro.svg';
import 'react-toastify/dist/ReactToastify.css';

function Register() {
  const [formValues, setFormValues] = useState({
    name: '',
    lastName: '',
    email: '',
    password: '',
  });
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

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
    if (response.status === 201) {
      toast.success('Usuário cadastrado com sucesso!');
      setTimeout(() => {
        navigate('/login');
      }, 1200);
    } else {
      toast.error(response.data.message || 'Erro ao cadastrar usuário!');
    }
  };

  return (
    <Container
      maxWidth={false}
      style={{
        margin: '0', display: 'flex', justifyContent: 'center', width: '100%', height: '100vh', fontFamily: 'Roboto',
      }}
    >
      {windowWidth > 700 && (
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
      )}

      <Box style={{
        flexDirection: 'column', justifyContent: 'center',
      }}
      >
        <Box
          variant="h3"
          style={{
            fontSize: '2.9rem', color: '#222244', textAlign: 'center', fontWeight: 400, lineHeight: '40px', marginTop: '10rem', marginBottom: '3rem',
          }}
        >
          Cadastre-se
        </Box>

        <form
          onSubmit={handleFormSubmit}
          style={{
            width: '100%', maxWidth: '500px',
          }}
        >
          <Box
            style={{
              display: 'flex',
              flexDirection: window.innerWidth <= 700 ? 'column' : 'row',
              justifyContent: window.innerWidth <= 700 ? 'center' : 'space-between',
            }}
          >
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
              style={{ margin: window.innerWidth <= 700 ? 'auto auto 15px auto' : 'auto 15px auto auto' }}
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
              style={{ marginBottom: '0px' }}
            />
          </Box>
          <TextField
            label="E-mail"
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
            label="Senha"
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
          <DefaultButton theme={primaryButtonTheme} label="CADASTRAR" onClick={handleFormSubmit} fullWidth />
        </form>
        <Typography
          variant="h3"
          style={{
            textDecoration: 'none', marginTop: '1rem', fontSize: '1.2rem', color: 'rgba(34, 34, 68, 1)', fontWeight: 400, lineHeight: '40px',
          }}
        >
          Já tem uma conta?
          {' '}
          <a href="/Login" style={{ textDecoration: 'none', color: 'inherit' }}>Faça Login</a>
        </Typography>
      </Box>
      <ToastContainer />
    </Container>
  );
}

export default Register;
