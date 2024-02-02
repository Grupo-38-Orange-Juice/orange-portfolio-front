import React, { useContext } from 'react';
import { Box } from '@mui/material';
import ProjContainer from '../ProjContainer';
import DefaultContainer from '../DefaultContainer';
import { ProjectsContext } from '../../context/AuthProvider/projectsProvider';

function GridProjs() {
  const { projectsInfo } = useContext(ProjectsContext);
  return (
    <Box
      id="container-wrapper"
      sx={{
        justifyContent: 'center',
        alignItems: 'center',
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gridGap: '1.5em',
        '@media screen and (max-width: 800px)': {
          gridTemplateColumns: '1fr',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '60px',
        },
      }}
    >

      {projectsInfo.length > 0 ? (
        projectsInfo.map((info) => (
          <Box
            className="container"
            item
            key={info.project.id}
          >
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

export default GridProjs;
