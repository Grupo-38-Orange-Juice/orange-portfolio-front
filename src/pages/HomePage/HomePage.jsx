import React from 'react';
import { Box, Container, Grid } from '@mui/material';
import TextField from '@mui/material/TextField';
import Header from '../../components/Header/Header';
import CardPerfil from '../../components/CardPerfil';

function HomePage() {
  const projects = [{
    id: 1,
    imgSrc: '',
    user: 'Camila Soares',
    location: 'Brasil',
  }];

  return (
    <main>
      <Header />
      <Container>
        <div className="container_top">
          <CardPerfil className="card_perfil" />
        </div>
        <Box className="box_proj" mt={3}>
          <h6>Meus projetos</h6>
          <TextField className="tag_text_field" id="outlined-basic" label="Buscar tags" sx={{ width: 513 }} />
          <Grid container spacing={3}>
            {projects.length > 0 ? (
              projects.map((project) => (
                <Grid item key={project.id} xs={12} sm={6} md={4} lg={3}>
                  <ProjContainer {...project} />
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