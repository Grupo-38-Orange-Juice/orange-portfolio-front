import React from 'react';
import { PropTypes } from '@mui/material';
import Profile from '../Profile/Profile';

function getCurrentDate() {
  const currentDate = new Date();
  const options = { month: '2-digit', year: '2-digit' };
  return currentDate.toLocaleDateString('pt-BR', options);
}

function ProjInfoFrame({
  user = 'Camila Soares',
  dateCreated = getCurrentDate(),
}) {
  return (
    <>
      <Profile />
      <p>
        {user}
        {' '}
        •
        {' '}
        {dateCreated}
      </p>
    </>
  );
}

ProjInfoFrame.propTypes = {
  user: PropTypes.string.isRequired,
  dateCreated: PropTypes.string.isRequired, // ver se precisa do "isRequired" ou não
};

export default ProjInfoFrame;
