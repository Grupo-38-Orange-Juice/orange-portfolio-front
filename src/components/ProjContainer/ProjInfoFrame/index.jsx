import React, { useState } from 'react';
import { Box } from '@mui/material';
import Profile from '../../Profile/Profile';
import './style.css';

// função para pegar data
function getCurrentDate() {
  const currentDate = new Date();
  const options = { month: '2-digit', year: '2-digit' };
  return currentDate.toLocaleDateString('pt-BR', options);
}

// estado para armazenar o nome do usuário
function ProjInfoFrame() {
  const [user, setUser] = useState('');

  // função para pegar nome do usuário
  const getUser = () => {
    setUser('Camila Soares');
  };

  React.useEffect(() => {
    getUser();
  }, []);

  const dateCreated = getCurrentDate();

  return (
    <Box className="proj_info_frame">
      <Profile size="25" />
      <p className="infos">
        {user}
        {' '}
        •
        {' '}
        {dateCreated}
      </p>
    </Box>
  );
}

export default ProjInfoFrame;
