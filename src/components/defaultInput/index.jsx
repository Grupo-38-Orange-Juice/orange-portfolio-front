import React from 'react';
import TextField from '@mui/material/TextField';
import PropTypes from 'prop-types';

function DefaultInput({
  title, defaultValue, type, onChange, value,
}) {
  return (
    <TextField
      id="outlined"
      label={title}
      type={type}
      defaultValue={defaultValue}
      onChange={onChange}
      value={value}
    />
  );
}
DefaultInput.propTypes = {
  title: PropTypes.string.isRequired,
  defaultValue: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
export default DefaultInput;
