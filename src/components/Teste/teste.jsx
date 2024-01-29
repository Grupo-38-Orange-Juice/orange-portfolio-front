import React, { useState } from 'react';
import Modal from 'react-modal';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { Container } from '@mui/material';
import { secondaryButtonTheme, primaryButtonTheme } from '../../mui-theme/buttons';
import Header from '../Header/Header';
import Logo from '../Header/Logo/Logo';
import DefaultButton from '../default-button';

Modal.setAppElement('#root');

export default function TestePag() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [formValues, setFormValues] = useState({
    lastTitulo: '',
    lastTags: '',
    LastLink: '',
    LastDescricao: '',
  });

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleInputChanges = (event) => {
    const { name, value } = event.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
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
              maxWidth: 'auto',
              margin: '7% 7% 3% 7%',
              display: 'flex',
              justifyContent: 'center',
            },
          }}
        >
          <Box
            style={{
              width: '50%',
              maxWidth: '450px',
              flexDirection: 'column',
              display: 'flex',
              justifyContent: 'flex-end',
              padding: '0px',
              overflow: 'hidden',
            }}
          >
            <p style={{ fontFamily: 'Roboto', marginBottom: '1rem' }}>Visualizar Publicação</p>
            <Container
              style={{
                width: '50%',
                maxWidth: '450px',
                flexDirection: 'row',
                alignItems: 'center',
                display: 'flex',
                justifyContent: 'flex-start',
                overflow: 'hidden',
              }}
            >
              <DefaultButton theme={primaryButtonTheme} label="Entrar" onClick={closeModal} fullWidth style={{ marginRight: '1rem' }} />
              <DefaultButton theme={secondaryButtonTheme} label="Cancelar" onClick={closeModal} fullWidth style={{ marginLeft: '1rem' }} />
            </Container>
          </Box>
          <Box
            style={{
              width: '50%',
              maxWidth: '500px',
              flexDirection: 'column',
              display: 'flex',
              justifyContent: 'flex-end',
              overflow: 'hidden',

            }}
          >
            <TextField
              label="Título"
              placeholder="Digite o título"
              type="text"
              InputLabelProps={{
                shrink: true,
              }}
              value={formValues.lastTitulo}
              onChange={handleInputChanges}
              name="lastTitulo"
              fullWidth
              style={{ marginBottom: '1rem' }}
            />
            <TextField
              label="Tags"
              placeholder="Digite a Tag"
              type="text"
              InputLabelProps={{
                shrink: true,
              }}
              value={formValues.lastTags}
              onChange={handleInputChanges}
              name="lastTags"
              fullWidth
              style={{ marginBottom: '1rem' }}
            />
            <TextField
              label="Link"
              placeholder="Digite o link"
              type="url"
              InputLabelProps={{
                shrink: true,
              }}
              value={formValues.LastLink}
              onChange={handleInputChanges}
              name="LastLink"
              fullWidth
              style={{ marginBottom: '1rem' }}
            />
            <TextField
              label="Descrição"
              placeholder="Digite a descrição"
              type="text"
              InputLabelProps={{
                shrink: true,
              }}
              value={formValues.LastDescricao}
              onChange={handleInputChanges}
              name="LastDescricao"
              fullWidth
              style={{ marginBottom: '1rem' }}
              multiline
              rows={3}
            />
          </Box>
        </Modal>
      )}
      <Header />
      <DefaultButton theme={primaryButtonTheme} label="Entrar" onClick={openModal} fullWidth />
      <Logo />
      <p> teste </p>
    </div>
  );
}
