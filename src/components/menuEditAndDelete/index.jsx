import React, { useState } from 'react';
import { Menu, MenuItem } from '@mui/material';
import iconEdit from '../../assets/icon_edit.svg';

function MenuEditAndDelete() {
  const [anchorElement, setAnchorElement] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorElement);

  const handleClick = (event) => {
    setAnchorElement(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorElement(null);
  };

  return (
    <>
      {/* aria-controls: se for true, abre edit-menu, se não, undefined */}
      <img
        id="iconEdit"
        src={iconEdit}
        alt="Menu Editar e Excluir"
        onClick={handleClick}
        aria-controls={open ? 'edit-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
      />
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
