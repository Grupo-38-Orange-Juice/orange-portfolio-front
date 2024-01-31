import React from 'react';
import Header from '../../components/Header/Header';
import CardPerfil from '../../components/CardPerfil';
import ProjContainer from '../../components/ProjContainer';
import DefaultContainer from '../../components/DefaultContainer';
import MenuEditAndDelete from '../../components/menuEditAndDelete';

function HomePage() {
  return (
    <main>
      <Header />
      <CardPerfil />
      <ProjContainer />
      <DefaultContainer />
      <MenuEditAndDelete />
    </main>
  );
}

export default HomePage;
