import React from 'react';
import { Box } from '@mui/material';
import PropTypes from 'prop-types';
import ProjInfoFrame from './ProjInfoFrame';
import './style.css';

function ProjContainer({
  // eslint-disable-next-line no-unused-vars
  projectId, image, tags, createdAt, user,
}) {
  return (
    <Box className="proj_container">
      <Box>
        <img className="img_proj" src={image} alt="Imagem do Projeto" />
      </Box>
      <Box className="bottom_proj">
        <ProjInfoFrame tags={tags} createdAt={createdAt} user={user} />
      </Box>
    </Box>
  );
}

ProjContainer.propTypes = {
  projectId: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  createdAt: PropTypes.string.isRequired,
  user: PropTypes.object.isRequired,
};

export default ProjContainer;
