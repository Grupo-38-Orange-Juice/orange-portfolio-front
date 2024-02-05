import React, { useContext } from 'react';
import { Box } from '@mui/material';
import PropTypes from 'prop-types';
import Profile from '../Profile/Profile';
import DefaultButton from '../default-button';
import { primaryButtonTheme } from '../../mui-theme/buttons';
import './style.css';
import { AuthContext } from '../../context/AuthProvider/authProvider';

function CardPerfil({
  location,
  toggleCreateModal,
}) {
  const { user } = useContext(AuthContext);
  return (
    <Box className="box__card_perfil">
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Profile className="profile" image={user ? user.image : 'https://www.ecompletocdn.com.br/i/fp/1178/1521968_2_1692801033.jpg'} size="130" />
      </Box>
      <Box className="container__right">
        <Box className="text_input">
          <h5>{user ? user.fullName : 'Loading...'}</h5>
          <p className="location">{location}</p>
        </Box>
        <DefaultButton className="button_add" theme={primaryButtonTheme} label="Adicionar projeto" onClick={toggleCreateModal} size="sm" />
      </Box>
    </Box>
  );
}

CardPerfil.propTypes = {
  location: PropTypes.string,
  toggleCreateModal: PropTypes.func.isRequired,
};

CardPerfil.defaultProps = {
  location: 'Brasil',
};

export default CardPerfil;
