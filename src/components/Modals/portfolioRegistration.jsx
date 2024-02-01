import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
import { secondaryButtonTheme, primaryButtonTheme } from '../../mui-theme/buttons';
import DefaultButton from '../default-button';
import ImageUpload from '../../images/Upload.svg';

Modal.setAppElement('#root');

export default function AdicionarProjeto({ modalIsOpen, toggleModal }) {
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

  const handleInputChanges = (event) => {
    const { name, value } = event.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  return (
    <Box style={{ textAlign: 'center', justifyContent: 'flex-start' }}>
      {modalIsOpen && (
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={toggleModal}
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
              fontFamily: 'Roboto, sans-serif',
              fontSize: '30px',
              color: '#515255',
              margin: 'auto',
            }}
          >
            <h1>Adicionar Projeto</h1>
          </Box>
          <Box
            style={{
              fontFamily: 'Roboto, sans-serif',
              fontSize: '15px',
              color: '#515255',
              margin: '10px 0px 0px 0px',
              maxWidth: '100%',
            }}
          >
            <h3>Selecione um conteudo que vc deseja fazer upload</h3>
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
              margin: windowWidth <= 950 ? '40px auto 0px auto' : '-340px 0px 0px 0px',
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
            <h1> Visualizar Publicação</h1>
          </Box>

          <Box
            style={{
              width: 'auto',
              maxWidth: '300px',
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'flex-start',
              gap: '20px',
              margin: windowWidth <= 950 ? 'auto' : '10px 0px 0px 0px',
            }}
          >
            <DefaultButton theme={primaryButtonTheme} label="Salvar" onClick={toggleModal} style={{ margin: '0 0.5rem 0 0' }} />
            <DefaultButton theme={secondaryButtonTheme} label="Cancelar" onClick={toggleModal} style={{ margin: '0 0 0 0.5rem' }} />
          </Box>
        </Modal>
      )}
    </Box>
  );
}
AdicionarProjeto.propTypes = {
  modalIsOpen: PropTypes.bool.isRequired,
  toggleModal: PropTypes.func.isRequired,
};
