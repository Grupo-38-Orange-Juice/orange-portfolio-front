/* eslint-disable no-restricted-syntax */
import React, { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import { Box, Typography } from '@mui/material';
import { toast, ToastContainer } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import DefaultButton from '../../components/default-button';
import { primaryButtonTheme } from '../../mui-theme/buttons';
import { createUser } from '../../service/orangeApi';
import registerImage from '../../images/img_cadastro.svg';
import 'react-toastify/dist/ReactToastify.css';
import { registerValidators } from '../../validators/validators';

function Register() {
  const [formValues, setFormValues] = useState({
    name: '',
    lastName: '',
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({
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

  const updateErrors = (newErrors) => setErrors((prevErrors) => ({ ...prevErrors, ...newErrors }));

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const {
      name, lastName, email, password,
    } = formValues;
    setErrors({
      name: '', lastName: '', email: '', password: '',
    });

    setErrors((prevErrors) => ({
      ...prevErrors,
      name: '',
      lastName: '',
      email: '',
      password: '',
    }));

    for (const field in registerValidators) {
      const validation = registerValidators[field](formValues[field]);
      if (validation) {
        updateErrors({ [field]: validation });
        return;
      }
    }

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
      disableGutters
      maxWidth={false}
      sx={{
        margin: '0',
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
        height: '100vh',
        fontFamily: 'Roboto',
        '@media (max-width: 950px)': {
          alignItems: 'center',
          justifyContent: 'center',
          padding: '20px',
        },
        '@media (max-width: 500px)': {
          marginBottom: '20px',
          fontSize: '24px',
        },
        '@media (max-width: 300px)': {
          marginBottom: '60px',
        },
      }}
    >
      {windowWidth > 940 && (
      <Box
        sx={{
          flex: '1',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '0px',
          overflow: 'hidden',
          visibility: window.innerWidth <= 940 ? 'hidden' : 'visible',
        }}
      >
        <img
          src={registerImage}
          alt="Imagem de registro"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'scale-down',
            objectPosition: 'left center',
          }}
        />
      </Box>
      )}

      <Box sx={{
        display: 'flex', flexDirection: 'column', flex: 2.5, justifyContent: 'center', alignItems: 'center',
      }}
      >
        <Typography
          variant="h3"
          style={{
            fontSize: '2.9rem', color: '#222244', textAlign: 'center', fontWeight: 400, lineHeight: '40px', marginTop: '10rem', marginBottom: '3rem',
          }}
        >
          Cadastre-se
        </Typography>
        <form
          onSubmit={handleFormSubmit}
          style={{
            width: '100%', maxWidth: '500px', alignSelf: 'center',
          }}
        >
          <Box
            style={{
              display: 'flex',
              flexDirection: window.innerWidth <= 940 ? 'column' : 'row',
              justifyContent: window.innerWidth <= 940 ? 'center' : 'space-between',
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
              onInput={handleInputChanges}
              name="name"
              fullWidth
              style={{ margin: window.innerWidth <= 940 ? 'auto auto 15px auto' : 'auto 15px auto auto' }}
              error={Boolean(errors.name)}
              helperText={errors.name}
            />
            <TextField
              label="Sobrenome"
              placeholder="Digite seu sobrenome"
              type="text"
              InputLabelProps={{
                shrink: true,
              }}
              value={formValues.lastName}
              onInput={handleInputChanges}
              name="lastName"
              fullWidth
              style={{ marginBottom: '0px' }}
              error={Boolean(errors.lastName)}
              helperText={errors.lastName}
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
            onInput={handleInputChanges}
            name="email"
            style={{ marginBottom: '1rem' }}
            error={Boolean(errors.email)}
            helperText={errors.email}
          />
          <TextField
            label="Senha"
            placeholder="********"
            type="password"
            fullWidth
            InputLabelProps={{
              shrink: true,
            }}
            value={formValues.password}
            onInput={handleInputChanges}
            name="password"
            style={{ marginBottom: '1rem' }}
            error={Boolean(errors.password)}
            helperText={errors.password}
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
