import React from 'react';
import { Container } from '@mui/material';
import './header.css';

function Header() {
  return (
    <Container disableGutters>
      <header className="header">
        <Container maxWidth="lg" className="left">
          <img width="50px" height="50px" src="https://i.pinimg.com/564x/4f/0a/b6/4f0ab6e9d01b3936bfdeaea88947cacc.jpg" alt="Docplanner Group" />
          <Container maxWidth="sm" className="header-texts">
            <p>Meus Projetos</p>
            <p>Descobrir</p>
          </Container>
        </Container>
      </header>
    </Container>
  );
}

export default Header;
