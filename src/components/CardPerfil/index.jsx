/* eslint-disable no-mixed-operators */
import React, { useContext } from 'react';
import { Box } from '@mui/material';
import PropTypes from 'prop-types';
import Profile from '../Profile/Profile';
import DefaultButton from '../default-button';
import { primaryButtonTheme } from '../../mui-theme/buttons';
import './style.css';
import { AuthContext } from '../../context/AuthProvider/authProvider';
import ImageUser from '../../images/user.jpg';

function CardPerfil({
  toggleCreateModal,
}) {
  const { user, location } = useContext(AuthContext);
  return (
    <Box className="box__card_perfil">
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Profile className="profile" image={user && user.image || ImageUser} size="130" />
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
  toggleCreateModal: PropTypes.func.isRequired,
};

export default CardPerfil;
