import React from 'react';
import PropTypes from 'prop-types';
import notificationIcon from '../../../assets/notification.svg';
import styles from './NotificationIcon.module.css';

function NotificationIcon({ onClick }) {
  // função para acessibilidade
  const handleKeyDown = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      onClick();
    }
  };
  return (
    <div
      className={styles.notificationIcon}
      onClick={onClick}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex={0}
    >
      <img src={notificationIcon} alt="Icone de notificações" />
    </div>
  );
}

NotificationIcon.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default NotificationIcon;
