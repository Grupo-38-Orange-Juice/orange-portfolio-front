import React from 'react';
import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import DefaultButton from '../default-button';
import { primaryButtonTheme } from '../../mui-theme/buttons';

  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />;

function ModalFeedback({
  Feedback,
}) {
  return (
    <Box sx={{
      display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '5px',
    }}
    >
      <Typography>
        {Feedback}
      </Typography>
      <img className="check" src="" alt="" />
      <DefaultButton theme={primaryButtonTheme} label="Voltar para projetos" />
    </Box>
  );
}

ModalFeedback.propTypes = {
  Feedback: PropTypes.string.isRequired,
};

export default ModalFeedback;
