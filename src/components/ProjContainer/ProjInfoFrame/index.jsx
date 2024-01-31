import React, { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import Profile from '../../Profile/Profile';
import ChipTag from '../../ChipTag';
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
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 600);

  // função para pegar nome do usuário
  const getUser = () => {
    setUser('Camila Soares');
  };

  useEffect(() => {
    getUser();

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 600);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const dateCreated = getCurrentDate();

  return (
    <Box className="proj_info_frame">
      <Profile size="26" className="profile" />
      <p className="infos">
        {user}
        {isMobile ? (
          <>
            <br />
            {dateCreated}
          </>
        ) : (
          /* se a tela for maior que 600px, rendeniza o "•" */
          <>
            {' '}
            •
            {' '}
            {dateCreated}
          </>
        )}
      </p>
      <ChipTag />
    </Box>
  );
}

export default ProjInfoFrame;
