import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Paper from '@mui/material/Paper';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import styles from './Header.module.css';
import Logo from './Logo/Logo';
import Profile from '../Profile/Profile';
import NotificationIcon from './Notification/NotificationIcon';
import Paragraph from './Paragraph/Paragraph';
import MenuFilled from './MenuFilledBar';
import { AuthContext } from '../../context/AuthProvider/authProvider';

function Header() {
  const { user } = useContext(AuthContext);

  const navigate = useNavigate();
  const [menuAnchor, setMenuAnchor] = useState(null);

  const [notificationAnchor, setNotificationAnchor] = useState(null);

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

  const handleNotificationClick = (event) => {
    setNotificationAnchor(event.currentTarget);
  };

  const closeNotificationPopup = () => {
    setNotificationAnchor(null);
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
        <Profile className="profile" image={user ? user.image : 'https://www.ecompletocdn.com.br/i/fp/1178/1521968_2_1692801033.jpg'} size="41" />
        <NotificationIcon onClick={handleNotificationClick} />
      </div>

      <Popover
        open={Boolean(notificationAnchor)}
        anchorEl={notificationAnchor}
        onClose={closeNotificationPopup}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <Paper sx={{
          height: '50px',
          padding: '10px',
          alignItems: 'flex-start',
        }}
        >
          <Typography variant="subtitle1">
            Você não possui notificações no momento.
          </Typography>
        </Paper>
      </Popover>
    </header>
  );
}

export default Header;
