import React from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from './Logo/Logo';
import Profile from '../Profile/Profile';
import NotificationIcon from './Notiification/NotificationIcon';
import Paragraph from './Paragraph/Paragraph';

function Header() {
  const navigate = useNavigate();

  function redirectToHome() {
    navigate('/');
  }

  function redirectToExplore() {
    navigate('/Explore');
  }

  return (
    <header>
      <div>
        <Logo />
        <Paragraph change={() => redirectToHome}>
          Meus projetos
        </Paragraph>
        <Paragraph change={() => redirectToExplore}>
          Descobrir
        </Paragraph>
      </div>
      <div>
        <Profile />
        <NotificationIcon />
      </div>
    </header>
  );
}

export default Header;
