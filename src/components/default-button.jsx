import React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { ThemeProvider } from '@mui/material';

function DefaultButton({
  theme, label, handleClick, fullWidth,
}) {
  return (
    <ThemeProvider theme={theme}>
      <Button variant="contained" color="primary" onClick={handleClick} fullWidth={fullWidth}>
        {label}
      </Button>
    </ThemeProvider>
  );
}

DefaultButton.propTypes = {
  theme: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  fullWidth: PropTypes.bool,
};

DefaultButton.defaultProps = {
  fullWidth: true,
};

export default DefaultButton;
