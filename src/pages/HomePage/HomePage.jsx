import React, { useState, useContext } from 'react';
import { Box, Container } from '@mui/material';
import Typography from '@mui/material/Typography';
import Header from '../../components/Header/Header';
import CardPerfil from '../../components/CardPerfil';
import ProjContainer from '../../components/ProjContainer/index';
import DefaultContainer from '../../components/DefaultContainer/index';
import TextfieldResponsive from '../../components/TextfieldResponsive';
import AdicionarProjeto from '../../components/Modals/portfolioRegistration';
// import projectsInfoMock from '../../mocks/projects';
import { ProjectsContext } from '../../context/AuthProvider/projectsProvider';

function HomePage() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const { projectsInfo } = useContext(ProjectsContext);
  const toggleModal = () => {
    setModalIsOpen(!modalIsOpen);
  };

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
