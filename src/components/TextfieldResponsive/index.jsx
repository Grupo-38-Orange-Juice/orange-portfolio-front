import React, { useState, useEffect } from 'react';
import { TextField } from '@mui/material';
import PropTypes from 'prop-types';

function TextfieldResponsive({ setValue, value }) {
  const getTextfieldWidth = () => {
    if (window.innerWidth < 361) {
      return 270;
    }
    if (window.innerWidth < 800) {
      return 320;
    }
    return 513;
  };

  const [textFieldWidth, setTextFieldWidth] = useState(getTextfieldWidth());

  useEffect(() => {
    const handleResize = () => {
      setTextFieldWidth(getTextfieldWidth());
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <TextField
      className="tag_text_field"
      id="outlined-basic"
      label="Buscar tags"
      sx={{ width: textFieldWidth, zIndex: 0 }}
      onChange={setValue}
      value={value}
    />
  );
}

TextfieldResponsive.propTypes = {
  setValue: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default TextfieldResponsive;
