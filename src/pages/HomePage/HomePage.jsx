import React, { useState } from 'react';
import { Box, Container } from '@mui/material';
import Typography from '@mui/material/Typography';
import Header from '../../components/Header/Header';
import CardPerfil from '../../components/CardPerfil';
import ProjContainer from '../../components/ProjContainer/index';
import DefaultContainer from '../../components/DefaultContainer/index';
import TextfieldResponsive from '../../components/TextfieldResponsive';
import AdicionarProjeto from '../../components/Modals/portfolioRegistration';

function HomePage() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const toggleModal = () => {
    setModalIsOpen(!modalIsOpen);
  };
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
      <Box
        className="main-box"
        maxWidth="l"
        disableGutters
        sx={{
          display: 'inline-flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '30px',
          width: '100%',
          maxWidth: '1980px',
          // media
          '@media screen and (max-width: 700px)': {
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
          '@media screen and (max-width: 700px)': {
            height: '0',
            display: 'flex',
            margin: '20px auto 0 auto',
          },
        }}
        >
          <CardPerfil toggleModal={toggleModal} />
        </Box>
        <Box
          className="box_proj"
          alignItems="center"
          width="auto"
        >
          <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
            marginTop: '34px',
            marginBottom: '30px',
            // media
            '@media screen and (max-width: 700px)': {
              alignItems: 'center',
              justifyContent: 'start',
            },
          }}
          >
            <Typography
              variant="h6"
              sx={{
                fontSize: '20px',
                fontStyle: 'normal',
                fontWeight: '500',
                letterSpacing: '0.15px',
                opacity: '0.6',
                // media
                '@media (max-width: 700px)': {
                  display: 'flex',
                  alignItems: 'flex-start',
                  justifyContent: 'start',
                },
              }}
            >
              Meus projetos
            </Typography>
            <TextfieldResponsive />
          </Box>
          <Box
            id="container-wrapper"
            sx={{
              justifyContent: 'center',
              alignItems: 'center',
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gridGap: '1.5em',
              '@media screen and (max-width: 700px)': {
                gridTemplateColumns: '1fr',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '60px',
              },
            }}
          >

            {projects.length > 0 ? (
              projects.map((project) => (
                <Box
                  className="container"
                  sx={{
                    '@media screen and (max-width: 700px': {
                    },
                  }}
                >
                  <ProjContainer
                    id={project.id}
                    imgSrc={project.imgSrc}
                    user={project.user}
                    location={project.location}
                  />
                </Box>
              ))
            ) : (
              <Box className="container">
                <DefaultContainer />
              </Box>
            )}

          </Box>
        </Box>
      </Box>
      <AdicionarProjeto modalIsOpen={modalIsOpen} toggleModal={toggleModal} />
    </main>
  );
}

export default HomePage;
