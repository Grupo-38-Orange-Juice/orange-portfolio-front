import React from 'react';
import { Box } from '@mui/material';
import PropTypes from 'prop-types';
import ProjContainer from '../ProjContainer';
import DefaultContainer from '../DefaultContainer';

function GridProjs({
  projectsInfo, fetchProjects, toggleFeedbackModal, toggleCreateModal,
  displayDefault,
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

      {projectsInfo && (
        projectsInfo.map((info) => (
          <Box
            className="containerProjs"
            key={info.project.id}
            sx={{ position: 'relative' }}
          >
            <ProjContainer
              projectInfo={info}
              fetchProjects={fetchProjects}
              toggleFeedbackModal={toggleFeedbackModal}
            />
          </Box>
        ))
      )}
      <Box className="container">
        <DefaultContainer toggleCreateModal={toggleCreateModal} displayDefault={displayDefault} />
      </Box>
    </Box>
  );
}

GridProjs.propTypes = {
  toggleCreateModal: PropTypes.func,
  projectsInfo: PropTypes.array.isRequired,
  fetchProjects: PropTypes.func,
  toggleFeedbackModal: PropTypes.func,
  displayDefault: PropTypes.bool,
};

GridProjs.defaultProps = {
  toggleCreateModal: () => {},
  fetchProjects: () => {},
  toggleFeedbackModal: () => {},
  displayDefault: false,
};

export default GridProjs;
