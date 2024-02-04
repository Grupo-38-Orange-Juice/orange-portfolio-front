import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Box } from '@mui/material';
import PropTypes from 'prop-types';
import ProjInfoFrame from './ProjInfoFrame';
import DeleteModal from '../Modals/DeleteModalProject';
import './style.css';
import MenuEditAndDelete from './menuEditAndDelete';

function ProjContainer({
  projectId, image, tags, createdAt, user, fetchProjects, toggleFeedbackModal,
}) {
  const location = useLocation();

  const [deleteModalIsOpen, setDeleteModalIsOpen] = useState(false);
  const [modalEditIsOpen, setModalEditIsOpen] = useState(false);

  const toggleDeleteModal = () => {
    setDeleteModalIsOpen(!deleteModalIsOpen);
  };

  const toggleEditModal = () => {
    setModalEditIsOpen(!modalEditIsOpen);
  };

  return (
    <Box className="proj_container">
      {location.pathname === '/' && <MenuEditAndDelete toggleDeleteModal={toggleDeleteModal} toggleEditModal={toggleEditModal} />}
      <Box>
        <img className="img_proj" src={image} alt="Imagem do Projeto" />
      </Box>
      <Box className="bottom_proj">
        <ProjInfoFrame tags={tags} createdAt={createdAt} user={user} />
      </Box>
      <DeleteModal
        isOpen={deleteModalIsOpen}
        toggleDeleteModal={toggleDeleteModal}
        projectId={projectId}
        fetchProjects={fetchProjects}
        toggleFeedbackModal={toggleFeedbackModal}
      />
    </Box>
  );
}

ProjContainer.propTypes = {
  projectId: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  createdAt: PropTypes.string.isRequired,
  user: PropTypes.object.isRequired,
  fetchProjects: PropTypes.func.isRequired,
  toggleFeedbackModal: PropTypes.func.isRequired,
};

export default ProjContainer;
