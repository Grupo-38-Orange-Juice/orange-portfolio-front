import React, { useEffect } from 'react';
import Modal from 'react-modal';
import Box from '@mui/material/Box';
import CloseIcon from '@mui/icons-material/Close';
import TextField from '@mui/material/TextField';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import foto from '../../../images/Circle.svg';

Modal.setAppElement('#root');

export default function ModalViewSavedProj({ isOpen, toggleViewModal, projectInfo }) {
  useEffect(() => {
    const handleResize = () => {
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Box style={{ textAlign: 'center', justifyContent: 'flex-start' }}>
      <Modal
        isOpen={isOpen}
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
            top: '15px',
            right: '15px',
            cursor: 'pointer',
          }}
          onClick={toggleViewModal}
        >
          <CloseIcon />
        </Box>
        <Box sx={{ margin: 3 }}>
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
              src={projectInfo.user.image || foto}
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
            <Typography variant="h1">
              {projectInfo.project.name}
            </Typography>
          </Box>
          <Box
            sx={{
              width: '100%',
              maxWidth: '700px',
              flexDirection: 'column',
              display: 'grid',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '16px auto auto auto',
              objectFit: 'contain',
            }}
          >
            <img
              src={projectInfo.project.image}
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
            value={projectInfo.project.description}
            name="LastDescricao"
            fullWidth
            style={{
              margin: '30px auto auto auto', alignItems: 'center',
            }}
            multiline
            rows={3}
          />
          <Typography variant="h6">Download</Typography>
          <Link href={projectInfo.project.link} />
        </Box>
      </Modal>
    </Box>
  );
}

ModalViewSavedProj.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggleViewModal: PropTypes.func.isRequired,
  projectInfo: PropTypes.shape({
    project: PropTypes.shape({
      createdAt: PropTypes.string,
      description: PropTypes.string,
      id: PropTypes.string,
      image: PropTypes.string,
      link: PropTypes.string,
      name: PropTypes.string,
      updatedAt: PropTypes.string,
    }).isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    user: PropTypes.shape({
      email: PropTypes.string,
      id: PropTypes.string,
      fullName: PropTypes.string,
      image: PropTypes.string,
    }).isRequired,
  }).isRequired,
};
