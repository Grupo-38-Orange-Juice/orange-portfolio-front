import React, { useState, useEffect } from 'react';
import { TextField } from '@mui/material';

function TextfieldResponsive() {
  const [textFieldWidth, setTextFieldWidth] = useState(window.innerWidth < 600 ? 288 : 513);

  // função para atualizar o estado de acordo com largura
  useEffect(() => {
    const handleResize = () => {
      setTextFieldWidth(window.innerWidth < 700 ? 320 : 513);
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
