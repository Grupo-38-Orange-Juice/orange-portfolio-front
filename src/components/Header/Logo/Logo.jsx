import React from 'react';
import orangeJuice from '../../../assets/LOGO-ORANGEPORTFOLIO.png';
import styles from './Logo.module.css';

function Logo() {
  return (
    <div className={styles.imagem}>
      <img src={orangeJuice} alt="logo da orange juice" />
    </div>
  );
}

export default Logo;
