import React from 'react';
import PropTypes from 'prop-types';
import styles from './Paragraph.module.css';

function Paragraph({ children, change }) {
  return (
    <button className={styles.navigate_item} type="button" onClick={change()}>
      {children}
    </button>
  );
}

Paragraph.propTypes = {
  children: PropTypes.node.isRequired,
  change: PropTypes.func.isRequired,
};

export default Paragraph;
