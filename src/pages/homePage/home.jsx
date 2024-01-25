import React from 'react';
import DefaultButton from '../../components/default-button';
import {
  errorButtonTheme, primaryButtonTheme, secondaryButtonTheme, disabledButtonTheme,
} from '../../mui-theme/buttons';
import CardAvatar from '../../components/cardAvatar/cardAvatar';

function Home() {
  return (
    <>
      <h1>Oi</h1>
      <DefaultButton theme={primaryButtonTheme} label="clique aqui" size="sm" />
      <DefaultButton theme={secondaryButtonTheme} label="Cadastre-se" size="lg" />
      <DefaultButton theme={errorButtonTheme} label="Cadastre-se" size="lg" disabled />
      <DefaultButton theme={disabledButtonTheme} label="Cadastre-se" size="lg" />
      <CardAvatar src="https://www.ecompletocdn.com.br/i/fp/1178/1521968_2_1692801033.jpg" size="150" />
    </>
  );
}

export default Home;
