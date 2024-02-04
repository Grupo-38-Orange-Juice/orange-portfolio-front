import React from 'react';
import { useLocation } from 'react-router-dom';
import { Box } from '@mui/material';
import PropTypes from 'prop-types';
import ProjContainer from '../ProjContainer';
import DefaultContainer from '../DefaultContainer';
import MenuEditAndDelete from '../ProjContainer/menuEditAndDelete';

function GridProjs({ projectsInfo, toggleDeleteModal, toggleEditModal }) {
  const location = useLocation();
  // console.log('Projeto', projectsInfo);

  return (
    <Box
      id="container-wrapper"
      sx={{
        justifyContent: 'center',
        alignItems: 'center',
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gridGap: '60px',
        marginBottom: 4,
        '@media screen and (max-width: 800px)': {
          gridTemplateColumns: '1fr',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '120px',
        },
        '@media screen and (max-width: 360px)': {
          gridTemplateColumns: '1fr',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '50px',
        },
      }}
    >

      {projectsInfo && projectsInfo.length > 0 ? (
        projectsInfo.map((info) => (
          <Box
            className="containerProjs"
            item
            key={info.project.id}
            sx={{ position: 'relative' }}
          >
            {location.pathname === '/' && <MenuEditAndDelete toggleDeleteModal={toggleDeleteModal} toggleEditModal={toggleEditModal} />}
            <ProjContainer
              projectId={info.project.id}
              image={info.project.image}
              tags={info.tags}
              createdAt={info.project.createdAt}
              user={info.user}
            />
          </Box>
        ))
      ) : (
        <Box className="container">
          <DefaultContainer />
        </Box>
      )}

    </Box>
  );
}

GridProjs.propTypes = {
  projectsInfo: PropTypes.func.isRequired,
  toggleDeleteModal: PropTypes.func.isRequired,
  toggleEditModal: PropTypes.func.isRequired,
};

export default GridProjs;
