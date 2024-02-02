import React, { useState } from 'react';
import { Box } from '@mui/material';
import ImageUpload from '../../images/Circle.svg';

function UploadImage() {
  const [image, setImage] = useState(null);

  const handleImageChange = (event) => {
    const selectedImage = event.target.files[0];

    if (selectedImage) {
      setImage(URL.createObjectURL(selectedImage));
      console.log(image);
    }
  };

  return (
    <Box
      style={{
        width: '100%',
        maxWidth: '430px',
        flexDirection: 'column',
        display: 'grid',
        alignItems: 'center',
        justifyContent: 'center',
        margin: window.innerWidth <= 950 ? '40px auto 0px auto' : '-340px 0px 0px 0px',
      }}
    >
      <img
        src={ImageUpload}
        alt="Imagem de registro"
        style={{ maxWidth: '100%', cursor: 'pointer' }}
      />
      <input
        id="upload-input"
        type="file"
        accept="image/*"
        style={{ display: 'none' }}
        onChange={handleImageChange}
      />
      {image && <img src={image} alt="Imagem selecionada" style={{ maxWidth: '100%' }} />}
    </Box>
  );
}

export default UploadImage;
