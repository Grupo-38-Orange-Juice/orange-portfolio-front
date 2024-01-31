import React from 'react';
import Header from '../../components/Header/Header';
import CardPerfil from '../../components/CardPerfil';
import ProjContainer from '../../components/ProjContainer';
import DefaultContainer from '../../components/DefaultContainer';

function HomePage() {
  return (
    <main>
      <Header />
      <CardPerfil />
      <ProjContainer />
      <DefaultContainer />
    </main>
  );
}

export default HomePage;
