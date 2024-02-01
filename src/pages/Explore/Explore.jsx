import React from 'react';
import { Box, Container } from '@mui/material';
import Typography from '@mui/material/Typography';
import Header from '../../components/Header/Header';

function Explore() {
  const projects = [{
    id: 1,
    imgSrc: 'https://i.pinimg.com/564x/da/9f/4a/da9f4a89b3eeefedc675aa25536235d8.jpg',
    user: 'Camila Soares',
    location: 'Brasil',
  },
  {
    id: 2,
    imgSrc: 'https://i.pinimg.com/564x/c7/e3/f7/c7e3f73a8b94146f9740005f1a3d64a0.jpg',
    user: 'Van Gogh',
    location: 'Holanda',
  },
  {
    id: 3,
    imgSrc: 'https://i.pinimg.com/564x/28/44/90/2844905f4dee9d692893c2cb4a283456.jpg',
    user: 'Frida Kahlo',
    location: 'México',
  },
  {
    id: 4,
    imgSrc: 'https://i.pinimg.com/564x/1d/4f/fa/1d4ffa294f0eb98ce6af7ac62d4213ee.jpg',
    user: 'Rita Lee',
    location: 'Brasil',
  },
  ];

  return (
    <main>
      <Header />
      <Container
        disableGutters
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          margin: 'auto',
          width: '100%',
          maxWidth: 1980,
          // media
          '@media (max-width: 700px)': {
            alignItems: 'center',
          },
        }}
      >
        <Box sx={{
          height: '200px',
          display: 'flex',
          alignItems: 'end',
          justifyContent: 'center',
          // media
          '@media (max-width: 700px)': {
            height: '0',
            display: 'flex',
            margin: '40px auto 0 auto',
          },
        }}
        >
          <Typography variant="h4" fontSize={34} sx={{ display: 'flex', alignItems: 'center', fontWeight: '400', letterSpacing: '0.25px' }}>
            Junte-se à comunidade de inovação, inspiração e descobertas, transformando experiências em conexões inesquecíveis
          </Typography>
        </Box>
      </Container>
    </main>
  );
}

export default Explore;
