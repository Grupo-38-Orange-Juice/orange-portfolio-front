import React, { useState } from 'react';
import { Menu, MenuItem } from '@mui/material';
import iconEdit from '../../assets/icon_edit.svg';
import arrow from '../../assets/arrow1.svg';
import './style.css';

function MenuEditAndDelete() {
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
    <>
      <div
        id="iconEdit"
        role="button"
        tabIndex={0}
        onClick={handleClick}
        onKeyDown={handleKeyDown}
      >
        <img
          src={iconEdit}
          alt="Menu Editar e Excluir"
        />

        <img className="arrow" src={arrow} alt="" />
      </div>
      <Menu
        id="edit-menu"
        anchorEl={anchorElement}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'iconEdit',
        }}
      >
        <MenuItem onClick={handleClose}>Editar</MenuItem>
        <MenuItem onClick={handleClose}>Excluir</MenuItem>
      </Menu>
    </>
  );
}

export default MenuEditAndDelete;
