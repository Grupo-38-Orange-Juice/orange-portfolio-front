import React, { useState } from 'react';
import Header from '../../components/Header/Header';
import CardPerfil from '../../components/CardPerfil';
import ProjContainer from '../../components/ProjContainer';
import DefaultContainer from '../../components/DefaultContainer';
import MenuEditAndDelete from '../../components/menuEditAndDelete';
import AdicionarProjeto from '../../components/Modals/portfolioRegistration';

function HomePage() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const toggleModal = () => {
    setModalIsOpen(!modalIsOpen);
  };
  return (
    <main>
      <Header />
      <CardPerfil toggleModal={toggleModal} />
      <ProjContainer />
      <DefaultContainer />
      <MenuEditAndDelete />
      <AdicionarProjeto modalIsOpen={modalIsOpen} toggleModal={toggleModal} />
    </main>
  );
}

export default HomePage;
