import React from 'react';
import { Box, Container, Grid } from '@mui/material';
import Typography from '@mui/material/Typography';
import Header from '../../components/Header/Header';
import TextfieldResponsive from '../../components/TextfieldResponsive';
import ProjContainer from '../../components/ProjContainer';
import DefaultContainer from '../../components/DefaultContainer';

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
          <Typography
            variant="h4"
            fontSize={34}
            sx={{
              display: 'flex', alignItems: 'center', fontWeight: '400', letterSpacing: '0.25px',
            }}
          >
            Junte-se à comunidade de inovação,
            inspiração e descobertas, transformando experiências
            em conexões inesquecíveis
          </Typography>
          <TextfieldResponsive />
          <Box>
            <Grid container spacing={8} sx={{ '@media (max-width: 700px)': { alignItems: 'center', justifyContent: 'center' } }}>
              {projects.length > 0 ? (
                projects.map((project) => (
                  <Grid
                    item
                    key={project.id}
                    xs={12}
                    sm={6}
                    md={4}
                    lg={4}
                    sx={{
                      width: '100%',
                      // media
                      '@media (max-width: 700px)': {
                        display: 'flex',
                        justifyContent: 'center',
                      },
                    }}
                  >
                    <ProjContainer
                      id={project.id}
                      imgSrc={project.imgSrc}
                      user={project.user}
                      location={project.location}
                    />
                  </Grid>
                ))
              ) : (
                <DefaultContainer />
              )}
            </Grid>
          </Box>
        </Box>
      </Container>
    </main>
  );
}

export default Explore;
