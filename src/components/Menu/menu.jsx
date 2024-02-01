import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import Popper from '@mui/material/Popper';

export default function Teste() {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  const handleIconClick = (event) => {
    handleToggle();
    handleClose(event);
  };

  return (
    <div>
      <IconButton
        ref={anchorRef}
        id="composition-button"
        aria-controls={open ? 'composition-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleIconClick}
      >
        <EditIcon style={{ marginRight: '4px' }} />
      </IconButton>
      <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
        <form style={{ marginTop: '1.5rem', width: '50%', maxWidth: '200px' }}>
          <MenuList id="composition-menu" aria-labelledby="composition-button" onClick={handleClose}>
            <MenuItem>
              <TextField label="Editar" fullWidth InputProps={{ startAdornment: <EditIcon style={{ marginLeft: '4px', marginRight: '4px' }} /> }} />
            </MenuItem>
            <MenuItem>
              <TextField label="Excluir" fullWidth InputProps={{ startAdornment: <DeleteIcon style={{ marginLeft: '4px', marginRight: '4px' }} /> }} />
            </MenuItem>
          </MenuList>
        </form>
      </Popper>
    </div>
  );
}
