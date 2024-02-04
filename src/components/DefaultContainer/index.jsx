import React from 'react';
import { Box } from '@mui/material';
import PropTypes from 'prop-types';
import collections from '../../assets/collections.svg';
import './style.css';

function DefaultContainer({ toggleViewModal }) {
  const handleClick = () => {
    // console.log('Clique registrado');
    toggleViewModal();
  };

  return (
    <div className="div_proj">
      <Box className="box_message" onClick={handleClick}>
        <img className="collections_icon" src={collections} alt="" />
        <p className="title_message">Adicione seu primeiro projeto</p>
        <p>Compartilhe seu talento com milhares de pessoas</p>
      </Box>
    </div>
  );
}

DefaultContainer.propTypes = {
  toggleViewModal: PropTypes.func.isRequired,
};

export default DefaultContainer;
