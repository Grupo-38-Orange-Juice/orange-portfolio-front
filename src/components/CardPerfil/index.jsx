import React from 'react';
import { Box } from '@mui/material';
import PropTypes from 'prop-types';
import Profile from '../Profile/Profile';
import DefaultButton from '../default-button';
import { primaryButtonTheme } from '../../mui-theme/buttons';
import './style.css';

function CardPerfil({
  user = 'Camila Soares', location = 'Brasil',
}) {
  const handleAddProject = () => {
    window.location.href = '/adicionarprojeto';
    console.log('Projeto adicionado!');
  };
  return (
    <Box className="box__card_perfil">
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Profile className="profile" src="https://www.ecompletocdn.com.br/i/fp/1178/1521968_2_1692801033.jpg" size="130" />
      </Box>
      <Box className="container__right">
        <Box className="text_input">
          <h5>{user}</h5>
          <p className="location">{location}</p>
        </Box>
        <DefaultButton className="button_add" theme={primaryButtonTheme} label="Adicionar projeto" onClick={handleAddProject} size="sm" />
      </Box>
    </Box>
  );
}

CardPerfil.propTypes = {
  user: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
};

export default CardPerfil;
