import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import { Box } from '@mui/material';
import { toast, ToastContainer } from 'react-toastify';
import { GoogleLogin } from '@react-oauth/google';
import DefaultButton from '../../components/default-button';
import { primaryButtonTheme } from '../../mui-theme/buttons';
import { googleLoginRequest, loginResquest } from '../../service/orangeApi';
import loginImage from '../../assets/loginImage.png';
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

  const googleLogin = async (response) => {
    const orangeResponse = await googleLoginRequest(response.credential);
    if (orangeResponse.status === 200) {
      console.log(orangeResponse);
      setTokenLocalStorage(orangeResponse.data.token);
      toast.success('Login efetuado!');
      setTimeout(() => {
        navigate('/');
      }, 1000);
    } else {
      toast.error(orangeResponse.data.message || 'Erro ao cadastrar usuário!');
    }
  };

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
      disableGutters
      className="main_box"
      maxWidth={false}
      sx={{
        margin: '0',
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
        height: '100vh',
        padding: 0,
        fontFamily: 'Roboto',
        marginLeft: 'auto',
        gap: '10px',
        '@media screen and (max-width: 950px)': {
          padding: '0 20px 0 0',
        },
        '@media screen and (max-width: 751px)': {
          padding: '0 20px 0 20px',
        },
      }}
    >
      {
  windowWidth > 750 && (
  <Box
    style={{
      height: '100%',
      display: 'flex',
      flex: 1.1,
      flexDirection: 'column',
      alignItems: 'flex-start',
      justifyContent: 'left',
      padding: 0,
      overflow: 'hidden',
      fontFamily: 'Roboto',
      left: '-10px',
      margin: '-10px',
      '@media screen and (maxWidth: 950px)': {
        alignItems: 'center',
        justifyContent: 'center',
      },
    }}
  >
    <img
      src={loginImage}
      alt="Imagem de registro"
      style={{
        width: '100%', height: '100%', left: 0, objectFit: 'scale-down', objectPosition: 'left center',
      }}
    />
  </Box>
  )
    }
      <Box
        className="right_box"
        sx={{
          display: 'flex',
          flex: 2,
          flexDirection: 'column',
          justifyContent: 'center',
          gap: '30px',
          alignItems: 'center',
          '@media (maxWidth: 800px)': {
            alignItems: 'center',
            justifyContent: 'center',
          },
          '@media (maxWidth: 970px)': {
            margin: '0 20px 0  20px',
          },
        }}
      >
        <Box
          style={{
            textAlign: 'center',
            fontWeight: 400,
            lineHeight: '40px',
            fontSize: window.innerWidth < 760 ? '1.8rem' : '2.8rem',
            color: '#222244',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          Entre no Orange Portfólio
        </Box>
        <GoogleLogin
          buttonText="Entrar com Google"
          onSuccess={async (response) => {
            await googleLogin(response);
          }}
          onFailure={(response) => {
            console.log(response);
          }}
          cookiePolicy="single_host_origin"
        />
        <Box sx={{ gap: 1 }}>
          <Box>
            <Box
              style={{
                fontSize: '1.2rem', color: '#515255', textAlign: 'left', fontWeight: 400, lineHeight: '40px',
              }}
            >
              Faça login com Email
            </Box>
            <form onSubmit={handleFormSubmit} style={{ width: '100%', maxWidth: '500px' }}>
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
                placeholder="********"
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
                fontSize: '1.2rem', textDecoration: 'none', color: '#818388', textAlign: 'left', fontWeight: 400, lineHeight: '40px',
              }}
            >
              <a href="/register" style={{ textDecoration: 'none', color: 'inherit' }}>Cadastre-se</a>
            </Box>
          </Box>
        </Box>
      </Box>
      <ToastContainer />
    </Container>
  );
}

export default Login;
