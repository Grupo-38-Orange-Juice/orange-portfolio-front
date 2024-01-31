import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Paper from '@mui/material/Paper';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import Popover from '@mui/material/Popover';
import styles from './Header.module.css';
import Logo from './Logo/Logo';
import Profile from '../Profile/Profile';
import NotificationIcon from './Notification/NotificationIcon';
import Paragraph from './Paragraph/Paragraph';
import MenuFilled from './MenuFilledBar';

function Header() {
  const navigate = useNavigate();
  const [menuAnchor, setMenuAnchor] = useState(null);

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
        <Profile className="profile" src="https://www.ecompletocdn.com.br/i/fp/1178/1521968_2_1692801033.jpg" size="41" />
        <NotificationIcon />
      </div>
    </header>
  );
}

export default Header;
