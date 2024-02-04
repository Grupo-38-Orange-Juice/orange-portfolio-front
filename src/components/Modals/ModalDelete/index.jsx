import React, { useContext, useState } from 'react';
import Modal from 'react-modal';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
import { secondaryButtonTheme, primaryButtonTheme } from '../../../mui-theme/buttons';
import DefaultButton from '../../default-button';
import FeedbackDelete from '../ModalFeedback/ModalSuccessDelete';
import { deleteProject } from '../../../service/api';
import { AuthContext } from '../../../context/AuthProvider/authProvider';

Modal.setAppElement('#root');

export default function ModalDelete({
  projectId,
  modalDeleteIsOpen,
  toggleDeleteModal,
  fetchProjects,
}) {
  const { user } = useContext(AuthContext);
  const [feedbackModal, setFeedbackModal] = useState(false);

  const handleClickDelete = async () => {
    toggleDeleteModal();

    try {
      // Aguardar a exclusão do projeto antes de prosseguir
      await deleteProject(projectId);

      // Aguardar o término da exclusão antes de buscar os projetos atualizados
      await fetchProjects(user.id);

      // Atualizar o estado local após o sucesso da operação
      setFeedbackModal(true);
    } catch (error) {
      console.error('Erro ao excluir projeto:', error);
      // Lidar com erros, se necessário
    }
  };

  const handleClickCancel = () => {
    toggleDeleteModal();
  };

  const toggleFeedbackModal = () => {
    setFeedbackModal(!feedbackModal);
  };

  return (
    <div>
      {modalDeleteIsOpen && (
        <Modal
          isOpen={modalDeleteIsOpen}
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
      )}
      {feedbackModal
      && (
      <FeedbackDelete
        isOpen={feedbackModal}
        toogle={toggleFeedbackModal}
      />
      )}
    </div>
  );
}

ModalDelete.propTypes = {
  modalDeleteIsOpen: PropTypes.bool.isRequired,
  toggleDeleteModal: PropTypes.func.isRequired,
  projectId: PropTypes.string.isRequired,
  fetchProjects: PropTypes.func.isRequired,
};
