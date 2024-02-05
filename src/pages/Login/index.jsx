import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import { Box } from '@mui/material';
import { toast, ToastContainer } from 'react-toastify';
import DefaultButton from '../../components/default-button';
import { primaryButtonTheme } from '../../mui-theme/buttons';
import { loginResquest } from '../../service/api';
import loginImage from '../../images/img_login.svg';
import 'react-toastify/dist/ReactToastify.css';
import { setTokenLocalStorage } from '../../context/AuthProvider/util';
import { loginValidators } from '../../validators/validators';
import './style.css';

function Login() {
  const [formValues, setFormValues] = useState({
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({
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
    const { email, password } = formValues;
    setErrors({ email: '', password: '' });

    for (const field in loginValidators) {
      const validation = loginValidators[field](formValues[field]);
      if (validation) {
        updateErrors({ [field]: validation });
        return;
      }
    }

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
        margin: '0',
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
        height: '100vh',
        padding: 0,
        fontFamily: 'Roboto',
      }}
    >
      {
  windowWidth > 700 && (
  <Box
    style={{
      width: '100%',
      maxWidth: '450px',
      marginBottom: '0px',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      justifyContent: 'left',
      padding: 0,
      overflow: 'hidden',
      marginRight: '0',
    }}
  >
    <img src={loginImage} alt="Imagem de registro" style={{ width: '100%', height: '100%' }} />
  </Box>
  )
    }
      <Box style={{
        display: 'flex', flexDirection: 'column', justifyContent: 'center',
      }}
      >
        <Box
          style={{
            textAlign: 'center',
            fontWeight: 400,
            lineHeight: '40px',
            marginTop: '8rem',
            fontSize: window.innerWidth < 550 ? '1.8rem' : '2.8rem',
            color: '#222244',
          }}
        >
          Entre no Orange Portfólio
        </Box>

        <Box
          style={{
            fontSize: '1.2rem', color: '#515255', textAlign: 'left', fontWeight: 400, lineHeight: '40px', marginTop: '5rem',
          }}
        >
          Faça login com Email
        </Box>

        <form onSubmit={handleFormSubmit} style={{ marginTop: '1rem', width: '100%', maxWidth: '500px' }}>
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
            error={Boolean(errors.email)}
            helperText={errors.email}
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
            error={Boolean(errors.password)}
            helperText={errors.password}
          />
          <DefaultButton theme={primaryButtonTheme} label="Entrar" onClick={handleFormSubmit} fullWidth />
        </form>
        <Box
          style={{
            marginTop: '0rem', fontSize: '1.2rem', textDecoration: 'none', color: '#818388', textAlign: 'left', fontWeight: 400, lineHeight: '40px',
          }}
        >
          <a href="/register" style={{ textDecoration: 'none', color: 'inherit' }}>Cadastre-se</a>
        </Box>
      </Box>
      <ToastContainer />
    </Container>
  );
}

export default Login;
