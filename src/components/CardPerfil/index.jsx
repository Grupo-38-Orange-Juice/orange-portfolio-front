import React from 'react';
import { Box } from '@mui/material';
import PropTypes from 'prop-types';
import Profile from '../Profile/Profile';
import DefaultButton from '../default-button';
import { primaryButtonTheme } from '../../mui-theme/buttons';
import './style.css';

function CardPerfil({
  user = 'Camila Soares',
  location = 'Brasil',
  toggleModal,

}) {
  return (
    <Box className="box__card_perfil">
      <Profile className="profile" src="https://www.ecompletocdn.com.br/i/fp/1178/1521968_2_1692801033.jpg" size="130" />
      <Box className="container__right">
        <Box className="text_input">
          <h5>{user}</h5>
          <p className="location">{location}</p>
        </Box>
        <DefaultButton className="button_add" theme={primaryButtonTheme} label="Adicionar projeto" onClick={toggleModal} size="sm" />
      </Box>
    </Box>
  );
}

CardPerfil.propTypes = {
  user: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  toggleModal: PropTypes.func.isRequired,
};

export default CardPerfil;
