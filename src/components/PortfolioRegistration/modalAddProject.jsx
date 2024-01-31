import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import Box from '@mui/material/Box';
import CloseIcon from '@mui/icons-material/Close';
import TextField from '@mui/material/TextField';
import { primaryButtonTheme } from '../../mui-theme/buttons';
import Header from '../Header/Header';
import DefaultButton from '../default-button';
import save from '../../images/img_save.svg';
import CardPerfil from '../CardPerfil';
import foto from '../../images/Circle.svg';

Modal.setAppElement('#root');

export default function ModalSaveProject() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [formValues, setFormValues] = useState({
    lastTitulo: '',
    lastTags: '',
    LastLink: '',
    LastDescricao: '',
  });

  useEffect(() => {
    const handleResize = () => {
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

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
    <Box style={{ textAlign: 'center', justifyContent: 'flex-start' }}>
      <Header />
      <DefaultButton theme={primaryButtonTheme} label="Entrar" onClick={openModal} fullWidth />
      <CardPerfil />

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
              maxWidth: '900px',
              margin: '5% auto auto auto',
            },
          }}
        >
          <Box
            style={{
              position: 'absolute',
              top: '10px',
              right: '10px',
              cursor: 'pointer',
            }}
            onClick={closeModal}
          >
            <CloseIcon />
          </Box>
          <Box
            style={{
              width: '100px',
              maxWidth: '100%',
              margin: 'auto',
              display: 'grid',
              position: 'absolute',
            }}
          >
            <img
              src={foto}
              alt="Imagem de registro"
              style={{ maxWidth: '30%', height: 'auto' }}
            />
          </Box>
          <Box
            style={{
              fontFamily: 'Roboto, sans-serif',
              fontSize: '20px',
              color: '#303133',
              margin: 'auto',
              width: '100px',
              maxWidth: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              whiteSpace: 'nowrap',
            }}
          >
            <h1> Ecommerce One Page</h1>
          </Box>
          <Box
            style={{
              width: '100%',
              maxWidth: '700px',
              flexDirection: 'column',
              display: 'grid',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '30px auto auto auto',
            }}
          >
            <img
              src={save}
              alt="Imagem de registro"
              style={{ maxWidth: '100%', height: 'auto' }}
            />
          </Box>
          <TextField
            placeholder=" "
            type="text"
            InputLabelProps={{
              shrink: true,
            }}
            value={formValues.LastDescricao}
            onChange={handleInputChanges}
            name="LastDescricao"
            fullWidth
            style={{
              margin: '30px auto auto auto', alignItems: 'center',
            }}
            multiline
            rows={3}
          />

        </Modal>
      )}
    </Box>
  );
}
