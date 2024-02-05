import React, { useEffect } from 'react';
import Modal from 'react-modal';
import Box from '@mui/material/Box';
import CloseIcon from '@mui/icons-material/Close';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import { Chip, useMediaQuery } from '@mui/material';
import foto from '../../../images/Circle.svg';
import formatDate from '../../../helpers/formatDate';
import Header from '../../Header/Header';

Modal.setAppElement('#root');

export default function ModalViewSavedProj({ isOpen, toggleViewModal, projectInfo }) {
  const isMobile = useMediaQuery('(max-width: 800px)');

  useEffect(() => {
    const handleResize = () => {
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (

    <Box style={{ textAlign: 'center', justifyContent: 'flex-start' }}>
      <Modal
        isOpen={isOpen}
        contentLabel="Adicionando Projeto"
        style={{
          overlay: {
            backgroundColor: isMobile ? 'rgba(0, 0, 0, 01)' : 'rgba(0, 0, 0, 0.5)',
          },
          content: {
            maxWidth: isMobile ? 'auto' : '900px',
            width: 'auto',
            margin: isMobile ? 'auto' : '3% auto 0% auto',
          },
        }}
      >
        {isMobile ? (
          <Box
            variant="Mobile"
          >
            <Box
              style={{
                position: 'absolute',
                top: '0px',
                right: '0px',
                cursor: 'pointer',
              }}
              onClick={toggleViewModal}
            >
              <CloseIcon />
            </Box>
            <Header />
            <Box>

              <Box
                style={{
                  fontFamily: 'roboto',
                  fontSize: '50px',
                  justifyContent: 'center',
                  alignItems: 'center',
                  textAlign: 'center',
                  margin: '40px auto 20px auto',
                }}
              >
                <h1 style={{
                  color: '#303133', fontFamily: 'roboto', fontSize: '24px',
                }}
                >
                  {projectInfo.project.name}
                </h1>

              </Box>

              <Box
                style={{
                  maxWidth: '400px',
                  flexDirection: 'column',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: 'auto',
                  objectFit: 'contain',
                }}
              >
                <img
                  src={projectInfo.project.image}
                  alt="Imagem de registro"
                  style={{ width: '100%', height: 'auto', maxWidth: '500px' }}
                />
              </Box>
              <Box style={{
                margin: '10px auto 10px auto',
                flexDirection: 'row',
                textAlign: 'center',
                alignItems: 'center',
                justifyContent: 'space-between',
                display: 'flex',
                maxWidth: '400px',
              }}
              >
                <Box style={{
                  flexDirection: 'row',
                  textAlign: 'center',
                  justifyContent: 'flex-start',
                  display: 'flex',
                  margin: '0',
                }}
                >
                  <Box
                    style={{
                      width: '34px',
                      maxWidth: '100%',
                    }}
                  >
                    <img
                      src={projectInfo.user.image || foto}
                      alt="Imagem de registro"
                      style={{ maxWidth: '30px' }}
                    />
                  </Box>
                  <Box style={{
                    flexDirection: 'column',
                    display: 'grid',
                    justifyContent: 'center',
                  }}
                  >
                    <Box
                      style={{
                        color: '#303133', fontFamily: 'roboto', fontSize: '16px', alignItems: 'flex-start', margin: 'auto auto auto 0px', textAlign: 'initial',
                      }}
                    >
                      <p>{projectInfo.user.fullName}</p>
                    </Box>
                    <Box
                      style={{
                        color: '#303133', fontFamily: 'roboto', fontSize: '16px', alignItems: 'center',
                      }}
                    >
                      <p>{formatDate(projectInfo.project.createdAt)}</p>
                    </Box>

                  </Box>
                </Box>
                <Box
                  style={{
                    fontSize: '5px',
                  }}
                  className="tags"
                  sx={{ display: 'flex', gap: '4px', mt: '2px' }}
                >
                  {projectInfo && projectInfo.tags.length > 0 && projectInfo.tags.map((tag) => (
                    <Chip label={tag} key={tag} />
                  ))}
                </Box>
              </Box>

              {' '}

            </Box>
            <Typography variant="h3" gutterBottom style={{ fontFamily: 'Roboto', fontSize: '16px', margin: '3% 10% auto 10%' }}>
              {projectInfo.project.description}
            </Typography>
            <Typography variant="h6" style={{ margin: '3% 10% auto 10%' }}>Download</Typography>

            <a
              href={projectInfo.project.link}
              style={{
                margin: '3% 10% auto 10%',
                textDecoration: 'none',
                display: 'block',
                wordWrap: 'break-word',
              }}
            >
              {projectInfo.project.link}
            </a>
          </Box>
        ) : (
          <Box variant="Desktop">

            <Box
              style={{
                position: 'absolute',
                top: '15px',
                right: '15px',
                cursor: 'pointer',
              }}
              onClick={toggleViewModal}
            >
              <CloseIcon />
            </Box>
            <Box>
              <Box sx={{
                textAlign: 'center',
                width: 'auto',
                justifyContent: 'space-between',
                alignItems: 'center',
                display: 'flex',
                flexDirection: 'row',
                flex: 1,
                margin: '7% 10% 5% 10%',
              }}
              >
                <Box style={{
                  flexDirection: 'row',
                  textAlign: 'center',
                  justifyContent: 'flex-start',
                  display: 'flex',
                  margin: '0',
                }}
                >
                  <Box
                    style={{
                      width: '34px',
                      maxWidth: '100%',
                    }}
                  >
                    <img
                      src={projectInfo.user.image || foto}
                      alt="Imagem de registro"
                      style={{ maxWidth: '30px' }}
                    />
                  </Box>
                  <Box style={{
                    flexDirection: 'column',
                    display: 'grid',
                    justifyContent: 'center',
                  }}
                  >
                    <Box
                      style={{
                        color: '#303133', fontFamily: 'roboto', fontSize: '16px', alignItems: 'flex-start', margin: 'auto auto auto 0px', textAlign: 'initial',
                      }}
                    >
                      <p>{projectInfo.user.fullName}</p>
                    </Box>
                    <Box
                      style={{
                        color: '#303133', fontFamily: 'roboto', fontSize: '16px', alignItems: 'center',
                      }}
                    >
                      <p>{formatDate(projectInfo.project.createdAt)}</p>
                    </Box>
                  </Box>
                </Box>
                <Box
                  style={{
                    fontFamily: 'roboto',
                    fontSize: '50px',
                  }}
                >
                  <h1 style={{
                    color: '#303133', fontFamily: 'roboto', fontSize: '24px',
                  }}
                  >
                    {projectInfo.project.name}
                  </h1>

                </Box>

                <Box className="tags" sx={{ display: 'flex', gap: '4px', mt: '2px' }}>
                  {projectInfo && projectInfo.tags.length > 0 && projectInfo.tags.map((tag) => (
                    <Chip label={tag} key={tag} />
                  ))}
                </Box>

              </Box>
              <Box
                sx={{
                  width: '100%',
                  flexDirection: 'column',
                  display: 'grid',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '16px auto auto auto',
                  objectFit: 'contain',
                }}
              >
                <img
                  src={projectInfo.project.image}
                  alt="Imagem de registro"
                  style={{ Width: '100%', height: 'auto', maxWidth: '500px' }}
                />
              </Box>

            </Box>
            <Typography variant="h3" gutterBottom style={{ fontFamily: 'Roboto', fontSize: '16px', margin: '3% 10% auto 10%' }}>
              {projectInfo.project.description}
            </Typography>
            <Typography variant="h6" style={{ margin: '3% 10% auto 10%' }}>Download</Typography>

            <a href={projectInfo.project.link} style={{ margin: '3% 10% auto 10%', textDecoration: 'none' }}>
              {projectInfo.project.link}
            </a>
          </Box>
        )}
      </Modal>
    </Box>

  );
}

ModalViewSavedProj.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggleViewModal: PropTypes.func.isRequired,
  projectInfo: PropTypes.shape({
    project: PropTypes.shape({
      createdAt: PropTypes.string,
      description: PropTypes.string,
      id: PropTypes.string,
      image: PropTypes.string,
      link: PropTypes.string,
      name: PropTypes.string,
      updatedAt: PropTypes.string,
    }).isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    user: PropTypes.shape({
      email: PropTypes.string,
      id: PropTypes.string,
      fullName: PropTypes.string,
      image: PropTypes.string,
    }).isRequired,
  }).isRequired,
};
