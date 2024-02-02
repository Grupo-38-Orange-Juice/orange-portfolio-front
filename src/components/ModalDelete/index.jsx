import React, { useState } from 'react';
import Modal from 'react-modal';
import Box from '@mui/material/Box';
import { secondaryButtonTheme, primaryButtonTheme } from '../../mui-theme/buttons';
import DefaultButton from '../default-button';

Modal.setAppElement('#root');

export default function ModalDelete() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div>
      {modalIsOpen && (
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Adicionando Projeto"
          style={{
            overlay: {
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
            },
            content: {
              maxWidth: '400px',
              maxHeight: '250px',
              margin: 'auto',
            },
          }}
        >
          <Box
            style={{
              width: '90%',
              maxWidth: '500px',
              flexDirection: 'column',
              display: 'flex',
              justifyContent: 'flex-end',
              overflow: 'hidden',
            }}
          >
            <Box
              style={{
                fontFamily: 'Roboto, sans-serif',
                fontSize: '30px',
                color: '#515255',
                margin: '5% auto auto 5%',
              }}
            >
              <h1>Deseja Excluir?</h1>
            </Box>
            <Box
              style={{
                fontFamily: 'Roboto, sans-serif',
                fontSize: '16px',
                color: '#515255',
                margin: '12% auto auto 5%',
              }}
            >
              <h3>Se você prosseguir irá excluir o projeto do seu portfólio</h3>
            </Box>
          </Box>
          <Box
            style={{
              width: 'auto',
              maxWidth: '250px',
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'flex-start',
              gap: '20px',
              margin: '10% auto auto 5%',
            }}
          >
            <DefaultButton theme={primaryButtonTheme} label="EXCLUIR" onClick={closeModal} fullWidth style={{ marginLeft: '1rem', maxWidth: 'xl' }} />
            <DefaultButton theme={secondaryButtonTheme} label="Cancelar" onClick={closeModal} fullWidth style={{ marginLeft: '1rem', maxWidth: 'xl' }} />
          </Box>
        </Modal>
      )}

      <Box
        style={{
          width: 'auto',
          maxWidth: '300px',
          display: 'flex',
          justifyContent: 'center',
          gap: '20px',
        }}
      >
        <DefaultButton theme={primaryButtonTheme} label="Entrar" onClick={openModal} fullWidth />
      </Box>
    </div>
  );
}
