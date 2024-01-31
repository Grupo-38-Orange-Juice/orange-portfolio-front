import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Paper from '@mui/material/Paper';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import Popover from '@mui/material/Popover';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import styles from './Header.module.css';
import Logo from './Logo/Logo';
import Profile from '../Profile/Profile';
import NotificationIcon from './Notification/NotificationIcon';
import Paragraph from './Paragraph/Paragraph';
import MenuFilled from './MenuFilledBar';
import NotificationPopup from '../NotificationModal';

function Header() {
  // menu
  const navigate = useNavigate();
  const [menuAnchor, setMenuAnchor] = useState(null);

  // notification
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [popupOpen, setPopupOpen] = useState(false);

  function redirectToHome() {
    navigate('/');
  }

  function redirectToExplore() {
    navigate('/Explore');
  }

  const redirectToSettings = () => {
    navigate('/Settings');
  };

  const handleMenuClick = (event) => {
    setMenuAnchor(event.currentTarget);
  };

  const handleMenuClose = () => {
    setMenuAnchor(null);
  };

  const handleRedirect = (path) => {
    navigate(path);
    handleMenuClose();
  };

  const handleSnackbarClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setSnackbarOpen(false);
  };

  const menuOptions = [
    {
      id: 'projects', label: 'Meus projetos', path: '/', onClick: redirectToHome,
    },
    {
      id: 'explore', label: 'Descobrir', path: '/Explore', onClick: redirectToExplore,
    },
    {
      id: 'settings', label: 'Configurações', path: '/Settings', onClick: redirectToSettings,
    },
  ];

  const handleNotificationClick = () => {
    console.log('Ícone de notificação clicado!');
    setPopupOpen(true);
  };

  const closeNotificationPopup = () => {
    setPopupOpen(false);
  };

  return (
    <header className={styles.container}>
      <MenuFilled className="menuFilled" onClick={handleMenuClick} />

      <Popover
        open={Boolean(menuAnchor)}
        anchorEl={menuAnchor}
        onClose={handleMenuClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <Paper>
          <MenuList>
            {menuOptions.map((option) => (
              <MenuItem key={option.id} onClick={() => handleRedirect(option.path)}>
                {option.label}
              </MenuItem>
            ))}
          </MenuList>
        </Paper>
      </Popover>

      <div className={styles.container_logo}>
        <Logo />
        <div className={styles.container_navigate}>
          <Paragraph change={() => redirectToHome}>
            Meus projetos
          </Paragraph>
          <Paragraph change={() => redirectToExplore}>
            Descobrir
          </Paragraph>
        </div>
      </div>

      <div className={styles.container_profile}>
        <Profile className="profile" src="https://www.ecompletocdn.com.br/i/fp/1178/1521968_2_1692801033.jpg" size="41" />
        <NotificationIcon onClick={handleNotificationClick} />
      </div>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
      >
        <Alert onClose={handleSnackbarClose} severity="info">
          Notificação clicada!
        </Alert>
      </Snackbar>

      {popupOpen && <NotificationPopup onClose={closeNotificationPopup} />}
    </header>
  );
}

export default Header;
