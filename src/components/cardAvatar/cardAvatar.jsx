import React from 'react';
import PropTypes from 'prop-types';
import './styleCardAvatar.css';

function CardAvatar({
  src, size,
}) {
  return (
    <div>
      <img src={src} width={size} height={size} alt="foto de perfil" />
    </div>
  );
}

CardAvatar.propTypes = {
  src: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
};

export default CardAvatar;
