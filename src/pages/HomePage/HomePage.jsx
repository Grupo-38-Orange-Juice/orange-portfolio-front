import React from 'react';
import Header from '../../components/Header/Header';
import CardPerfil from '../../components/CardPerfil';
import ProjContainer from '../../components/ProjContainer';

function HomePage() {
  return (
    <main>
      <Header />
      <CardPerfil />
      <ProjContainer />
    </main>
  );
}

export default HomePage;
