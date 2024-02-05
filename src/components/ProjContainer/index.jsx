import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Box } from '@mui/material';
import PropTypes from 'prop-types';
import ProjInfoFrame from './ProjInfoFrame';
import DeleteModal from '../Modals/DeleteModalProject';
import ModalViewSavedProj from '../Modals/ModalViewSavedProj/modalViewSavedProj';
import MenuEditAndDelete from './menuEditAndDelete';
import './style.css';

function ProjContainer({
  projectInfo, fetchProjects, toggleFeedbackModal,
}) {
  const location = useLocation();
  const [deleteModalIsOpen, setDeleteModalIsOpen] = useState(false);
  const [modalEditIsOpen, setModalEditIsOpen] = useState(false);
  const [modalViewIsOpen, setModalViewIsOpen] = useState(false);

  const toggleViewModal = () => {
    setModalViewIsOpen(!modalViewIsOpen);
  };

  const toggleDeleteModal = () => {
    setDeleteModalIsOpen(!deleteModalIsOpen);
  };

  const toggleEditModal = () => {
    setModalEditIsOpen(!modalEditIsOpen);
  };

  return (
    <Box className="proj_container">
      {location.pathname === '/' && <MenuEditAndDelete toggleDeleteModal={toggleDeleteModal} toggleEditModal={toggleEditModal} />}
      <Box className="image_box" onClick={toggleViewModal}>
        <img className="img_proj" src={projectInfo.project.image} alt="Imagem do Projeto" />
      </Box>
      <ModalViewSavedProj
        toggleViewModal={toggleViewModal}
        projectInfo={projectInfo}
        isOpen={modalViewIsOpen}
      />
      <Box className="bottom_proj">
        <ProjInfoFrame
          tags={projectInfo.tags}
          createdAt={projectInfo.project.createdAt}
          user={projectInfo.user}
        />
      </Box>
      <DeleteModal
        isOpen={deleteModalIsOpen}
        toggleDeleteModal={toggleDeleteModal}
        projectId={projectInfo.project.id}
        fetchProjects={fetchProjects}
        toggleFeedbackModal={toggleFeedbackModal}
      />
    </Box>
  );
}

ProjContainer.propTypes = {
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
  fetchProjects: PropTypes.func.isRequired,
  toggleFeedbackModal: PropTypes.func.isRequired,
};

export default ProjContainer;
