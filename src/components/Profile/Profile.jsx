import React from 'react';
import PropTypes from 'prop-types';
import styles from './Profile.module.css';

function Profile({
  size, image,
}) {
  return (
    <div className={styles.profileImage}>
      <img src={image} width={size} height={size} alt="" />
    </div>
  );
}

Profile.propTypes = {
  size: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default Profile;
