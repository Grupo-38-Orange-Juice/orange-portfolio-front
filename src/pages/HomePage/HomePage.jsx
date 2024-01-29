import React from 'react';
import Header from '../../components/Header/Header';
import CardPerfil from '../../components/CardPerfil';
import MenuEditAndDelete from '../../components/menuEditAndDelete';

function HomePage() {
  return (
    <main>
      <Header />
      <CardPerfil />
      <MenuEditAndDelete />
    </main>
  );
}

export default HomePage;
