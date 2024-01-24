import React from 'react';
import Logo from './logo/logo';
import Profile from '../profile/profile';
import NotificationIcon from './notiification/NotificationIcon';
import Paragraph from './paragraph/paragraph';

function Header() {
  return (
    <header>
      <div>
        <Logo />
        <Paragraph>
          Meus projetos
        </Paragraph>
        <Paragraph>
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
