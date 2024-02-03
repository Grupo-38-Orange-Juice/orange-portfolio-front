import { Chip } from '@mui/material';
import React, { useState, useEffect } from 'react';

function getTag() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const tagFromBackend = 'teste';
      resolve(tagFromBackend);
    }, 1000);
  });
}

function ChipTag() {
  const [tag, setTag] = useState(null);

  useEffect(() => {
    const fetchTag = async () => {
      const tagFromBackend = await getTag();
      setTag(tagFromBackend);
    };

    fetchTag();
  }, []);

  return (
    <Chip label={tag} />
  );
}

export default ChipTag;
