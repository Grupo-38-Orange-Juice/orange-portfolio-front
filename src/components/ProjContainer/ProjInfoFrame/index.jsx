import React, { useState, useEffect } from 'react';
import { Box, Chip } from '@mui/material';
import PropTypes from 'prop-types';
import Profile from '../../Profile/Profile';
import './style.css';
import formatDate from '../../../helpers/formatDate';
import ImageUser from '../../../images/user.jpg';

function ProjInfoFrame({ createdAt, tags, user }) {
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
          <Profile size="26" className="profile" image={user.image || ImageUser} />
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
      <Box className="tags" sx={{ display: 'flex', gap: '4px', mt: '2px' }}>
        {tags && tags.length > 0 && tags.map((tag) => (
          <Chip label={tag} key={tag} />
        ))}
      </Box>
    </Box>
  );
}

ProjInfoFrame.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  createdAt: PropTypes.string.isRequired,
  user: PropTypes.object.isRequired,
};

export default ProjInfoFrame;
