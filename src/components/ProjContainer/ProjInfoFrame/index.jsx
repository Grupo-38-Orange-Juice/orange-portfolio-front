import React, { useState, useEffect, useContext } from 'react';
import { Box, Chip } from '@mui/material';
import PropTypes from 'prop-types';
import Profile from '../../Profile/Profile';
import './style.css';
import { AuthContext } from '../../../context/AuthProvider/authProvider';

const formatDate = (date) => {
  const newDate = new Date(date);
  const month = String(newDate.getMonth() + 1).padStart(2, '0');
  const year = newDate.getFullYear().toString().slice(2);
  return `${month}/${year}`;
};

function ProjInfoFrame({ createdAt, tags }) {
  const { user } = useContext(AuthContext);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 600);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 600);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Box className="proj_info_frame">
      {user
        && (
        <>
          <Profile size="26" className="profile" image={user.image} />
          <p className="infos">
            {user.fullName}
            {isMobile ? (
              <>
                <br />
                {formatDate(createdAt)}
              </>
            ) : (
            /* se a tela for maior que 600px, rendeniza o "•" */
              <>
                {' '}
                •
                {' '}
                {formatDate(createdAt)}
              </>
            )}
          </p>
        </>
        )}
      <Box className="tags">
        {tags && tags.length > 0 && tags.map((tag) => (
          <Chip tag={tag} key={tag} />
        ))}
      </Box>
    </Box>
  );
}

ProjInfoFrame.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  createdAt: PropTypes.string.isRequired,
};

export default ProjInfoFrame;
