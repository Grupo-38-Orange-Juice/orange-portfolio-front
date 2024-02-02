import React, { useState, useEffect } from 'react';
import { TextField } from '@mui/material';

function TextfieldResponsive() {
  const getTextfieldWidth = () => {
    if (window.innerWidth < 360) {
      return 270;
    }
    if (window.innerWidth < 800) {
      return 320;
    }
    return 513;
  };

  const [textFieldWidth, setTextFieldWidth] = useState(getTextfieldWidth());

  // função para atualizar o estado de acordo com a largura
  useEffect(() => {
    const handleResize = () => {
      setTextFieldWidth(getTextfieldWidth());
    };

    // ouvinte de evento de redimensionamento
    window.addEventListener('resize', handleResize);

    // remove ouvinte ao desmontar o componente
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <TextField
      className="tag_text_field"
      id="outlined-basic"
      label="Buscar tags"
      sx={{ width: textFieldWidth, zIndex: -1 }}
    />
  );
}

export default TextfieldResponsive;
