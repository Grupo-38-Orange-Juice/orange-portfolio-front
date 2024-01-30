import React from 'react';
import { Box, Container, Grid } from '@mui/material';
import TextField from '@mui/material/TextField';
import Header from '../../components/Header/Header';
import CardPerfil from '../../components/CardPerfil';

function HomePage() {
  const projects = [{
    id: 1, imgSrc: '', user: 'Camila Soares', location: 'Brasil',
  }];

  return (
    <main>
      <Header />
      <Container>
        <CardPerfil className="card_perfil" />
        <Box className="box_proj" mt={3}>
          <h6>Meus projetos</h6>
          <TextField className="tag_text_field" id="outlined-basic" label="Buscar tags" sx={{ width: 513 }} />

        </Box>
      </Container>
    </main>
  );
}

export default HomePage;