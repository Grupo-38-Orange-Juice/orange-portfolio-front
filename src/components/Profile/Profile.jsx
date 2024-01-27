import React from 'react';
import PropTypes from 'prop-types';
import styles from './Profile.module.css';
import profile from '../../assets/profile.png';

function Profile({
  size,
}) {
  return (
    <div className={styles.profileImage}>
      <img src={profile} width={size} height={size} alt="" />
    </div>
  );
}

Profile.propTypes = {
  size: PropTypes.string.isRequired,
};

export default Profile;
