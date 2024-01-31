import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { secondaryButtonTheme, primaryButtonTheme } from '../../mui-theme/buttons';
import Header from '../Header/Header';
import Logo from '../Header/Logo/Logo';
import DefaultButton from '../default-button';
import ImageUpload from '../../images/Upload.svg';
import CardPerfil from '../CardPerfil';

Modal.setAppElement('#root');

export default function PortfolioRegistration() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [formValues, setFormValues] = useState({
    lastTitulo: '',
    lastTags: '',
    LastLink: '',
    LastDescricao: '',
  });
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
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

      <Logo />
      <p> teste </p>

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
              margin: '8% auto auto auto',

            },
          }}
        >
          <Box
            style={{
              fontFamily: 'Roboto, sans-serif',
              fontSize: '30px',
              color: '#515255',
              margin: '10px 0px 10px 10px',
            }}
          >
            <p>Adicionar Projeto</p>
          </Box>
          <Box
            style={{
              fontFamily: 'Roboto, sans-serif',
              fontSize: '15px',
              color: '#515255',
              margin: '10px 0px 10px 10px',
              maxWidth: '100%',
            }}
          >
            <p>Selecione um conteudo que vc deseja fazer upload</p>
          </Box>
          <Box
            style={{
              width: '400px',
              flexDirection: 'column',
              maxWidth: '100%',
              margin: windowWidth <= 950 ? '40px auto 0px auto' : '40px 0px 0px 50%',
            }}
          >

            <TextField
              label="Título"
              placeholder=" "
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
              placeholder=" "
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
              placeholder=" "
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
              placeholder=" "
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
          <Box
            style={{
              width: '100%',
              maxWidth: '430px',
              flexDirection: 'column',
              display: 'grid',
              alignItems: 'center',
              justifyContent: 'center',
              margin: windowWidth <= 950 ? '40px auto 0px auto' : '-320px 0px 0px 0px',
            }}
          >
            <img
              src={ImageUpload}
              alt="Imagem de registro"
              style={{ maxWidth: '100%' }}
            />
          </Box>
          <Box
            style={{
              fontFamily: 'Roboto, sans-serif',
              fontSize: '20px',
              color: '#515255',
              margin: windowWidth <= 950 ? '10px auto 5px 15%' : '10px 0px 0px 0px',
            }}
          >
            <p> Visualizar Publicação</p>
          </Box>

          <Box
            style={{
              width: 'auto',
              maxWidth: '300px',
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'flex-start',
              gap: '20px',
              margin: windowWidth <= 950 ? 'auto' : '0px 0px 0px 0px',
            }}
          >
            <DefaultButton theme={primaryButtonTheme} label="Salvar" onClick={closeModal} style={{ margin: '0 0.5rem 0 0' }} />
            <DefaultButton theme={secondaryButtonTheme} label="Cancelar" onClick={closeModal} style={{ margin: '0 0 0 0.5rem' }} />
          </Box>
        </Modal>
      )}
    </Box>
  );
}
