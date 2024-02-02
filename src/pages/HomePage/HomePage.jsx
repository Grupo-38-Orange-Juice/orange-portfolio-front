import React, { useState, useContext } from 'react';
import { Box, Container, Grid } from '@mui/material';
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
          <CardPerfil toggleModal={toggleModal} />
        </Box>
        <Box
          className="box_proj"
          mt={3}
          sx={{
            marginLeft: { xs: 0, md: 'auto' },
          }}
        >
          <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
            marginTop: '18px',
            marginBottom: '30px',
            // media
            '@media (max-width: 700px)': {
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
          <Box>
            <Grid container spacing={8} sx={{ '@media (max-width: 700px)': { alignItems: 'center', justifyContent: 'center' } }}>
              {projectsInfo && projectsInfo.length > 0 ? (
                projectsInfo.map((info) => (
                  <Grid
                    item
                    key={info.project.id}
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
                      projectId={info.project.id}
                      image={info.project.image}
                      tags={info.tags}
                      createdAt={info.project.createdAt}
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
      <AdicionarProjeto modalIsOpen={modalIsOpen} toggleModal={toggleModal} />
    </main>
  );
}

export default HomePage;
