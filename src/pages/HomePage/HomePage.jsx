import React from 'react';
import { Box, Container, Grid } from '@mui/material';
import TextField from '@mui/material/TextField';
import Header from '../../components/Header/Header';
import CardPerfil from '../../components/CardPerfil';
import ProjContainer from '../../components/ProjContainer/index';
import DefaultContainer from '../../components/DefaultContainer/index';

function HomePage() {
  const projects = [{
    id: 1,
    imgSrc: 'https://www.ecompletocdn.com.br/i/fp/1178/1521968_3_1692801048.jpg',
    user: 'Camila Soares',
    location: 'Brasil',
  }];

  return (
    <main>
      <Header />
      <Container disableGutters>
        <div className="container_top">
          <CardPerfil className="card_perfil" />
        </div>
        <Box className="box_proj" mt={3}>
          <h6>Meus projetos</h6>
          <TextField
            className="tag_text_field"
            d="outlined-basic"
            label="Buscar tags"
            sx={{ width: window.innerWidth < 600 ? 288 : 513 }}
          />
          <Grid container spacing={3}>
            {projects.length > 0 ? (
              projects.map((project) => (
                <Grid
                  item
                  key={project.id}
                  xs={12}
                  sm={6}
                  md={4}
                  lg={3}
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
      </Container>
    </main>
  );
}

export default HomePage;
