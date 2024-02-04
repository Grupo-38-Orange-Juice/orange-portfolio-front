/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import PropTypes from 'prop-types';

function TagTextField({
  tags, handleInputChanges, error, helperText,
}) {
  const [filteredTags, setFilteredTags] = useState(tags);

  useEffect(() => {
    setFilteredTags(tags);
  }, [tags]);

  const handleTagChange = (event, value) => {
    if (value) {
      const tagIds = value.map((tag) => tag.id);
      handleInputChanges({ target: { name: 'lastTags', value: tagIds } });
    }
  };

  return (
    <Autocomplete
      style={{ marginBottom: '16px' }}
      multiple
      id="tags-outlined"
      options={filteredTags}
      getOptionLabel={(option) => option.name}
      filterSelectedOptions
      onChange={handleTagChange}
      renderInput={(params) => (
        <TextField
          {...params}
          variant="outlined"
          label="Tags"
          placeholder="Tags"
          error={error}
          helperText={helperText}
          FormHelperTextProps={{ style: { color: 'red' } }}
        />
      )}
    />
  );
}

TagTextField.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleInputChanges: PropTypes.func.isRequired,
  error: PropTypes.bool.isRequired,
  helperText: PropTypes.string.isRequired,
};

export default TagTextField;
