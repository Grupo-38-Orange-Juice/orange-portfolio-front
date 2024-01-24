import React from 'react';
import Logo from '../../atoms/logo/logo';
import Profile from '../../atoms/profile/profile';
import NotificationIcon from '../../atoms/notiification/NotificationIcon';

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
