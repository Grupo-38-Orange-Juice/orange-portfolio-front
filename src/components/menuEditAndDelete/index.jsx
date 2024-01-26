import React from 'react';
// import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import './style.css';

// fazer um tema para a lista com MUI e ver imagem arrow

// eslint-disable-next-line no-empty-pattern
function MenuEditAndDelete({
  // labelEdit = 'Editar', labelDelete = 'Excluir',
}) {
  return (
    <Box className="menu">
      <svg src="/assets/arrow1.svg" viewBox="0 0 18 26" />
      <Box className="box" sx={{ width: 400, maxWidth: 208, bgcolor: 'background.paper' }}>
        <nav>
          <List>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText primary="Editar" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component="a" href="#simple-list">
                <ListItemText primary="Excluir" />
              </ListItemButton>
            </ListItem>
          </List>
        </nav>
      </Box>
    </Box>
  );
}

// MenuEditAndDelete.propTypes = {
//   labelEdit: PropTypes.string.isRequired,
//   labelDelete: PropTypes.string.isRequired,
// };

export default MenuEditAndDelete;
