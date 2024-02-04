import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Box } from '@mui/material';
import PropTypes from 'prop-types';
import ProjInfoFrame from './ProjInfoFrame';
import ModalDelete from '../Modals/ModalDelete';
import './style.css';
import MenuEditAndDelete from './menuEditAndDelete';

function ProjContainer({
  projectId, image, tags, createdAt, user, fetchProjects,
}) {
  const location = useLocation();

  const [modalDeleteIsOpen, setModalDeleteIsOpen] = useState(false);
  const [modalEditIsOpen, setModalEditIsOpen] = useState(false);

  const toggleDeleteModal = () => {
    setModalDeleteIsOpen(!modalDeleteIsOpen);
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
      <ModalDelete
        modalDeleteIsOpen={modalDeleteIsOpen}
        toggleDeleteModal={toggleDeleteModal}
        projectId={projectId}
        fetchProjects={fetchProjects}
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
};

export default ProjContainer;
