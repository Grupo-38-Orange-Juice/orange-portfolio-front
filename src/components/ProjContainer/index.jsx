import React from 'react';
import { Box } from '@mui/material';
import imgProj from '../../assets/img.png';
import ProjInfoFrame from './ProjInfoFrame';
import './style.css';

function ProjContainer() {
  return (
    <Box className="proj_container">
      <Box>
        <img className="img_proj" src={imgProj} alt="" />
      </Box>
      <Box>
        <ProjInfoFrame />
      </Box>

    </Box>
  );
}

export default ProjContainer;
