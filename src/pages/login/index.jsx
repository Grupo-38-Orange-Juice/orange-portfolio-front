import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import { Box, Typography } from '@mui/material';
import { toast, ToastContainer } from 'react-toastify';
import DefaultButton from '../../components/default-button';
import { primaryButtonTheme } from '../../mui-theme/buttons';
import { loginResquest } from '../../service/api';
import registerImage from '../../images/img_cadastro.png';
import 'react-toastify/dist/ReactToastify.css';
import { setTokenLocalStorage } from '../../context/AuthProvider/util';

function Login() {
  const [formValues, setFormValues] = useState({
    email: '',
    password: '',
  });
  const navigate = useNavigate();

  const handleInputChanges = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = formValues;

    const response = await loginResquest({ email, password });
    if (response.status === 200) {
      setTokenLocalStorage(response.data.token);
      toast.success('Login efetuado!');
      setTimeout(() => {
        navigate('/');
      }, 1000);
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
            fontSize: '48px', color: 'rgba(34, 34, 68, 1)', textAlign: 'center', fontFamily: 'Roboto', fontWeight: 400, lineHeight: '40px', marginTop: '12rem',
          }}
        >
          Entre no Orange Portfolio
        </Typography>
        <form onSubmit={handleFormSubmit} style={{ width: '100%', maxWidth: '500px', margin: 'auto' }}>
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
          <DefaultButton theme={primaryButtonTheme} label="ENTRAR" onClick={handleFormSubmit} fullWidth />
          <Typography
            variant="h3"
            style={{
              fontSize: '1.2rem', textAlign: 'left', fontFamily: 'Roboto', fontWeight: 400, lineHeight: '40px',
            }}
          >
            <a href="/register" style={{ textDecoration: 'none', color: 'rgba(129, 131, 136, 1)' }}> Cadastre-se</a>
          </Typography>
        </form>
      </Box>
      <ToastContainer />
    </Container>
  );
}

export default Login;
