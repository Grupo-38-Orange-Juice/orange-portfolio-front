import React from 'react';
import notificationIcon from '../../../assets/notification.svg';
import styles from './NotificationIcon.module.css';

function NotificationIcon() {
  return (
    <div className={styles.notificationIcon}>
      <img src={notificationIcon} alt="Icone de notificações" />
    </div>
  );
}

export default NotificationIcon;
