import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import Box from '@mui/material/Box';
import CloseIcon from '@mui/icons-material/Close';
import TextField from '@mui/material/TextField';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import ProjInfoFrame from '../../ProjContainer/ProjInfoFrame';
import save from '../../../images/img_save.svg';
import foto from '../../../images/Circle.svg';

Modal.setAppElement('#root');

export default function ModalViewSavedProj({ modalViewIsOpen, toggleViewModal }) {
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

  const handleInputChanges = (event) => {
    const { name, value } = event.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  return (
    <Box style={{ textAlign: 'center', justifyContent: 'flex-start' }}>
      {modalViewIsOpen && (
        <Modal
          isOpen={modalViewIsOpen}
          onRequestClose={toggleViewModal}
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
          // zIndex="2"
        >
          <Box
            style={{
              position: 'absolute',
              top: '10px',
              right: '10px',
              cursor: 'pointer',
            }}
            onClick={toggleViewModal}
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
            <h1>
              {formValues.lastTitulo}
            </h1>
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
          <Typography variant="h6">Download</Typography>
          <Link href={formValues.lastTitulo} />
        </Modal>
      )}
    </Box>
  );
}

ModalViewSavedProj.propTypes = {
  modalViewIsOpen: PropTypes.bool.isRequired,
  toggleViewModal: PropTypes.func.isRequired,
};
