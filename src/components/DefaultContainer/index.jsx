import React from 'react';
import { Box } from '@mui/material';
import collections from '../../assets/collections.svg';
import './style.css';

function DefaultContainer() {
  return (
    <div className="div_proj">
      <Box className="box_message">
        <img className="collections_icon" src={collections} alt="" />
        <p className="title_message">Adicione seu primeiro projeto</p>
        <p>Compartilhe seu talento com milhares de pessoas</p>
      </Box>
    </div>
  );
}

export default DefaultContainer;
