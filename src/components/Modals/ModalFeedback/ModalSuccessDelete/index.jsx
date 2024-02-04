import React from 'react';
import Modal from 'react-modal';
import Box from '@mui/material/Box';
import { green } from '@mui/material/colors';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import PropTypes from 'prop-types';
import { primaryButtonTheme } from '../../../../mui-theme/buttons';
import DefaultButton from '../../../default-button';

Modal.setAppElement('#root');

export default function FeedbackDelete({ isOpen, toogle }) {
  const handleBackHomeButtonClick = () => {
    toogle();
  };

  return (
    <div>
      {isOpen && (
        <Modal
          isOpen={isOpen}
          onRequestClose={toogle}
          contentLabel="Adicionando Projeto"
          style={{
            overlay: {
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
            },
            content: {
              maxWidth: '400px',
              maxHeight: '300px',
              margin: 'auto',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
            },
          }}
        >
          <Box
            style={{
              fontFamily: 'Roboto, sans-serif',
              fontSize: '30px',
              color: '#515255',
              alignItems: 'center',
            }}
          >
            <h1>Projeto deletado com sucesso!</h1>
          </Box>
          <Box
            style={{ margin: '30px' }}
          >
            <CheckCircleIcon sx={{ color: green[700], fontSize: 45 }} />
          </Box>
          <Box
            style={{
              width: 'auto',
              maxWidth: '250px',
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              gap: '20px',
              margin: 'auto',
            }}
          >
            <DefaultButton theme={primaryButtonTheme} label="voltar para projetos" onClick={handleBackHomeButtonClick} fullWidth style={{ marginLeft: '1rem', maxWidth: 'xl' }} />
          </Box>
        </Modal>
      )}
    </div>
  );
}

FeedbackDelete.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toogle: PropTypes.func.isRequired,
};
