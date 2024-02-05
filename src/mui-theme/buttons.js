import { createTheme } from '@mui/material';

/* export const buttonTheme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        contained: {
          background: "#FF5522",
          "&:hover": {
            background: "#CC4400"
          }
        },
        root: {
          // Adicione estilos de fonte aqui
          fontFamily: "Roboto, sans-serif",
          lineHeight: "26px",
          letterSpacing: "0.46px",
          fontSize: "15px",
          color: "#EDEFF2",
        },
      }
    }
  }
}); */

const buttonBaseStyles = {
  fontFamily: 'Roboto, sans-serif',
  lineHeight: '36px',
  letterSpacing: '0.46px',
  fontSize: '15px',
  // color: 'rgba(255, 255, 255, 1)',
  startIcon: false,
};

const createButtonTheme = (background, hoverBackground) => createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        contained: {
          borderRadius: '4px',
          background,
          '&:hover': {
            background: hoverBackground,
            '&:disabled': {
              background: 'rgba(0, 0, 0, 0.12)',
            },
          },
        },
        root: buttonBaseStyles,
      },
    },
  },
});

export const primaryButtonTheme = createButtonTheme('rgba(255, 85, 34, 1)', 'rgba(204, 68, 0, 1)');
export const secondaryButtonTheme = createButtonTheme('rgba(0, 0, 0, 0.12)', 'rgba(34, 34, 68, 1)', { color: 'rgba(120, 120, 120, 1)' });
export const errorButtonTheme = createButtonTheme('rgba(221, 0, 0, 1)', 'rgba(187, 0, 0, 1)');
