import React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { ThemeProvider } from '@mui/material';

function DefaultButton({
  theme, label, handleClick, size,
}) {
  return (
    <ThemeProvider theme={theme}>
      <Button variant="contained" color="primary" onClick={handleClick} size={size}>
        {label}
      </Button>
    </ThemeProvider>
  );
}

DefaultButton.propTypes = {
  theme: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  size: PropTypes.string,
};

DefaultButton.defaultProps = {
  size: 'medium',
};

export default DefaultButton;
