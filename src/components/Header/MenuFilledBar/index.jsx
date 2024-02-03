import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import './style.css';
import menu from '../../../assets/menu.svg';

function Alert({ onClose, severity, children }) {
  return (
    <MuiAlert elevation={6} variant="filled" onClose={onClose} severity={severity}>
      {children}
    </MuiAlert>
  );
}

function MenuFilled({ onClick }) {
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const handleClick = () => {
    setSnackbarOpen(true);
    onClick();
  };

  const handleSnackbarClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setSnackbarOpen(false);
  };

  // função para acessibilidade
  const handleKeyDown = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      handleClick();
    }
  };

  return (
    <>
      <div
        className="menuFilled"
        onClick={onClick}
        onKeyDown={handleKeyDown}
        tabIndex={0} // acessibilidade - foco
        role="button"
      >
        <img src={menu} alt="Menu SVG" />
      </div>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
      >
        <Alert onClose={handleSnackbarClose} severity="info">
          Menu clicked!
        </Alert>
      </Snackbar>
    </>
  );
}

MenuFilled.propTypes = {
  onClick: PropTypes.func.isRequired,
};

Alert.propTypes = {
  onClose: PropTypes.func.isRequired,
  severity: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default MenuFilled;
