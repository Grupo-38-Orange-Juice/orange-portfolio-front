import React from 'react';
import PropTypes from 'prop-types';
import styles from './Profile.module.css';

function Profile({
  src, size,
}) {
  return (
    <div className={styles.profileImage}>
      <img src={src} width={size} height={size} alt="" />
    </div>
  );
}

Profile.propTypes = {
  src: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
};

export default Profile;
