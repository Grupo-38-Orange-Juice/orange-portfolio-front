import React from 'react';
import profileImage from '../../assets/profile.png';
import styles from './Profile.module.css';

function Profile() {
  return (
    <div className={styles.profileImage}>
      <img src={profileImage} alt="" />
    </div>
  );
}

export default Profile;
