import React, { useContext } from 'react';
import Modal from 'react-modal';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
import { secondaryButtonTheme, primaryButtonTheme } from '../../../mui-theme/buttons';
import DefaultButton from '../../default-button';
import { deleteProject } from '../../../service/orangeApi';
import { AuthContext } from '../../../context/AuthProvider/authProvider';

Modal.setAppElement('#root');

export default function DeleteModal({
  projectId,
  isOpen,
  toggleDeleteModal,
  toggleFeedbackModal,
  fetchProjects,
}) {
  const { user } = useContext(AuthContext);

  const handleClickDelete = async () => {
    toggleDeleteModal();
    await deleteProject(projectId);
    await fetchProjects(user.id);
    toggleFeedbackModal('Projeto deletado com sucesso!');
  };

  const handleClickCancel = () => {
    toggleDeleteModal();
  };

  return (
    isOpen && (
    <div>
      <Modal
        isOpen={isOpen}
        onRequestClose={toggleDeleteModal}
        contentLabel="Adicionando Projeto"
        style={{
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
          },
          content: {
            maxWidth: '500px',
            maxHeight: '300px',
            margin: 'auto',
          },
          zIndex: 1000,
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
          <DefaultButton theme={primaryButtonTheme} label="EXCLUIR" onClick={handleClickDelete} fullWidth style={{ marginLeft: '1rem', maxWidth: 'xl' }} />
          <DefaultButton theme={secondaryButtonTheme} label="Cancelar" onClick={handleClickCancel} fullWidth style={{ marginLeft: '1rem', maxWidth: 'xl' }} />
        </Box>
      </Modal>
    </div>
    )
  );
}

DeleteModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggleDeleteModal: PropTypes.func.isRequired,
  projectId: PropTypes.string.isRequired,
  fetchProjects: PropTypes.func.isRequired,
  toggleFeedbackModal: PropTypes.func.isRequired,
};
