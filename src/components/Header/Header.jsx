import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Header.module.css';
import Logo from './Logo/Logo';
import Profile from '../Profile/Profile';
import NotificationIcon from './Notification/NotificationIcon';
import Paragraph from './Paragraph/Paragraph';
import MenuFilled from './MenuFilledBar';

function Header() {
  const navigate = useNavigate();

  function redirectToHome() {
    navigate('/');
  }

  function redirectToExplore() {
    navigate('/Explore');
  }

  return (
    <header className={styles.container}>
      <div className={styles.container_logo}>
        <MenuFilled />
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
        <Profile />
        <NotificationIcon />
      </div>
    </header>
  );
}

export default Header;
