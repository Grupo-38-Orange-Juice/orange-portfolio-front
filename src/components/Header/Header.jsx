import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
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

  function redirectToHome() {
    navigate('/');
  }

  function redirectToExplore() {
    navigate('/Explore');
  }

  return (
    <header className={styles.container}>
      <MenuFilled className="menuFilled" />
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
        <NotificationIcon />
      </div>
    </header>
  );
}

export default Header;
