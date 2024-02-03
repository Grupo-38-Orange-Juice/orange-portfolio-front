import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { Box } from '@mui/material';
import PropTypes from 'prop-types';
import ProjContainer from '../ProjContainer';
import DefaultContainer from '../DefaultContainer';
import { ProjectsContext } from '../../context/AuthProvider/projectsProvider';
import MenuEditAndDelete from '../ProjContainer/menuEditAndDelete';

function GridProjs({ toggleDeleteModal }) {
  const { projectsInfo } = useContext(ProjectsContext);
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
            {location.pathname === '/' && <MenuEditAndDelete toggleDeleteModal={toggleDeleteModal} />}
            <ProjContainer
              projectId={info.project.id}
              image={info.project.image}
              tags={[]}
              createdAt={info.project.createdAt}
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
  toggleDeleteModal: PropTypes.func.isRequired,
};

export default GridProjs;
