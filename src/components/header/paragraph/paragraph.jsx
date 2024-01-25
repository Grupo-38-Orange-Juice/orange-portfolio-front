import React from 'react';
import PropTypes from 'prop-types';

function Paragraph({ children, change }) {
  return (
    <button type="button" onClick={change()}>
      {children}
    </button>
  );
}

Paragraph.propTypes = {
  children: PropTypes.node.isRequired,
  change: PropTypes.func.isRequired,
};

export default Paragraph;
