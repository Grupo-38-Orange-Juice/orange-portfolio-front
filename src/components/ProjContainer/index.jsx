import React from 'react';
import { Box } from '@mui/material';
import PropTypes from 'prop-types';
import imgProj from '../../assets/img.png';
import ProjInfoFrame from './ProjInfoFrame';

import './style.css';

function ProjContainer({
  projectId, image, tags, createdAt,
}) {
  return (
    <Box className="proj_container" key={projectId} sx={{ maxwidth: '100%', maxHeight: '100%' }}>
      <Box sx={{
        maxwidth: '100%', maxHeight: '100%', display: 'flex', justifyContent: 'center', justifyItems: 'center', alignItems: 'center', alignContent: 'center',
      }}
      >
        <img className="img_proj" src={image || imgProj} alt="" />
      </Box>
      <Box className="bottom_proj">
        <ProjInfoFrame tags={tags} createdAt={createdAt} />
      </Box>
    </Box>
  );
}

ProjContainer.propTypes = {
  projectId: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  createdAt: PropTypes.string.isRequired,
};

export default ProjContainer;
