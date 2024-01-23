import React from "react";
import Button from '@mui/material/Button';
import { ThemeProvider } from "@mui/material";

const DefaultButton = ({ theme, label, handleClick, size, ...props }) => {
  return (
    <ThemeProvider theme={theme}>
      <Button {...props} variant="contained" color="primary" onClick={handleClick} size={size}>
        {label}
      </Button>
    </ThemeProvider>
  );
}

export default DefaultButton;