import React from 'react';
import { useNavigate } from 'react-router-dom'; // Importe useNavigate aqui
import Logo from './logo/logo';
import Profile from '../profile/profile';
import NotificationIcon from './notiification/NotificationIcon';
import Paragraph from './paragraph/paragraph';

function Header() {
  const navigate = useNavigate(); // Obtenha a função navigate usando useNavigate

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
