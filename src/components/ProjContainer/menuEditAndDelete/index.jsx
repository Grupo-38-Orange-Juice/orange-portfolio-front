import React, { useState } from 'react';
import { Menu, MenuItem, Box } from '@mui/material';
import PropTypes from 'prop-types';
import iconEdit from '../../../assets/icon_edit.svg';
import arrow from '../../../assets/arrow1.svg';
import './style.css';

function MenuEditAndDelete({ toggleDeleteModal, toggleEditModal }) {
  const [anchorElement, setAnchorElement] = useState(null);
  const open = Boolean(anchorElement);

  const handleClick = (event) => {
    setAnchorElement(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorElement(null);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      handleClick(event);
    }
  };

  return (
    <Box
      sx={{
        position: 'absolute', right: '10px', top: '10px', cursor: 'pointer',
      }}
    >
      <Box
        id="iconEdit"
        role="button"
        tabIndex={0}
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        sx={{ zIndex: '1' }}
      >
        <img
          src={iconEdit}
          alt="Menu Editar e Excluir"
        />

        <img className="arrow" src={arrow} alt="" />
      </Box>
      <Menu
        id="edit-menu"
        anchorEl={anchorElement}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'iconEdit',
        }}
        sx={{
          ':hover & .MuiMenu-List': {
            background: '#FFEECC',
          },
        }}
      >
        <MenuItem role="button" onClick={() => { toggleEditModal(); handleClose(); }}>Editar</MenuItem>
        <MenuItem role="button" className="item-delete" onClick={() => { toggleDeleteModal(); handleClose(); }}>Excluir</MenuItem>
      </Menu>
    </Box>
  );
}

MenuEditAndDelete.propTypes = {
  toggleDeleteModal: PropTypes.func.isRequired,
  toggleEditModal: PropTypes.func.isRequired,
};

export default MenuEditAndDelete;
