import React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import PropTypes from 'prop-types';

function NotificationPopup({ onClose }) {
  return (
    <Paper style={{
      padding: '20px', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
    }}
    >
      <Typography variant="h6">Notificações</Typography>
      <Typography variant="body1">Você não possui notificações no momento.</Typography>
      <Button variant="contained" color="primary" onClick={onClose}>
        Fechar
      </Button>
    </Paper>
  );
}

NotificationPopup.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default NotificationPopup;
