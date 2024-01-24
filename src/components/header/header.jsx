import React from 'react';
import Logo from './logo/logo';
import Profile from '../profile/profile';
import NotificationIcon from './notiification/NotificationIcon';

function Header() {
  return (
    <header>
      <div>
        <Logo />
      </div>
      <div>
        <Profile />
        <NotificationIcon />
      </div>
    </header>
  );
}

export default Header;
