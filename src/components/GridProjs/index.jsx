import React from 'react';
import { Box } from '@mui/material';
import PropTypes from 'prop-types';
import ProjContainer from '../ProjContainer';
import DefaultContainer from '../DefaultContainer';

function GridProjs({
  projectsInfo, fetchProjects, toggleFeedbackModal,
}) {
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
            key={info.project.id}
            sx={{ position: 'relative' }}
          >
            <ProjContainer
              projectId={info.project.id}
              image={info.project.image}
              tags={info.tags}
              createdAt={info.project.createdAt}
              user={info.user}
              fetchProjects={fetchProjects}
              toggleFeedbackModal={toggleFeedbackModal}
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
  projectsInfo: PropTypes.array.isRequired,
  fetchProjects: PropTypes.func.isRequired,
  toggleFeedbackModal: PropTypes.func.isRequired,
};

export default GridProjs;
