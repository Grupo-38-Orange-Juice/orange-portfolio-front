import React from 'react';
import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';
import DefaultButton from '../default-button';
import { primaryButtonTheme } from '../../mui-theme/buttons';

function ModalDelete() {
  return (
    <Box>
      <Typography>
        Deseja excluir?
      </Typography>
      <Typography>
        Se você prosseguir irá excluir o projeto do seu portfólio
      </Typography>
      <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
        <DefaultButton theme={primaryButtonTheme} label="Excluir" />
        <DefaultButton theme={primaryButtonTheme} disabled label="Cancelar" />
      </Box>
    </Box>
  );
}

export default ModalDelete;
