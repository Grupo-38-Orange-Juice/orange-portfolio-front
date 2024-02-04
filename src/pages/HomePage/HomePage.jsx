import React, { useContext, useEffect, useState } from 'react';
import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';
import Header from '../../components/Header/Header';
import CardPerfil from '../../components/CardPerfil';
import TextfieldResponsive from '../../components/TextfieldResponsive';
import GridProjs from '../../components/GridProjs/index';
import ModalProj from '../../components/Modals/ModalProj/modalProj';
import { ProjectsContext } from '../../context/AuthProvider/projectsProvider';
import ModalViewSavedProj from '../../components/Modals/ModalViewSavedProj/modalViewSavedProj';

function HomePage() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [search, setValue] = useState('');

  const { projectsInfo } = useContext(ProjectsContext);
  const toggleModal = () => {
    setModalIsOpen(!modalIsOpen);
  };

  const handleSearch = (event) => {
    setValue(event.target.value);
  };

  const [modalEditIsOpen, setModalEditIsOpen] = useState(false);
  const toggleEditModal = () => {
    setModalEditIsOpen(!modalEditIsOpen);
  };

  const [modalViewIsOpen, setModalViewIsOpen] = useState(false);
  const toggleViewModal = () => {
    setModalViewIsOpen(!modalViewIsOpen);
  };

  useEffect(() => {
    if (projectsInfo && projectsInfo.length > 0) {
      const newFilteredProjects = projectsInfo
        .filter((project) => project.tags.some((tag) => tag.toLowerCase()
          .includes(search.toLowerCase())));
      setFilteredProjects(
        newFilteredProjects,
      );
    }
  }, [search, projectsInfo]);

  return (
    <main>
      <Header />
      <Box
        className="main-box"
        maxWidth="l"
        disableGutters
        sx={{
          display: 'inline-flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '30px',
          width: '100%',
          maxWidth: '1980px',
          // media
          '@media screen and (max-width: 700px)': {
            alignItems: 'center',
          },
        }}
      >
        <Box sx={{
          height: '200px',
          display: 'flex',
          alignItems: 'end',
          justifyContent: 'center',
          // media
          '@media screen and (max-width: 700px)': {
            height: '0',
            display: 'flex',
            margin: '0 auto 0 auto',
          },
        }}
        >
          <CardPerfil toggleModal={toggleModal} />
        </Box>
        <Box
          className="box_proj"
          alignItems="center"
          width="auto"
        >
          <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
            marginTop: '34px',
            marginBottom: '30px',
            // media
            '@media screen and (max-width: 700px)': {
              alignItems: 'center',
              justifyContent: 'start',
            },
          }}
          >
            <Typography
              variant="h6"
              sx={{
                fontSize: '20px',
                fontStyle: 'normal',
                fontWeight: '500',
                letterSpacing: '0.15px',
                opacity: '0.6',
                // media
                '@media (max-width: 700px)': {
                  display: 'flex',
                  alignItems: 'flex-start',
                  justifyContent: 'start',
                },
              }}
            >
              Meus projetos
            </Typography>
            <TextfieldResponsive setValue={handleSearch} value={search} />
          </Box>
          <GridProjs
            projectsInfo={filteredProjects}
            toggleEditModal={toggleEditModal}
            toggleViewModal={toggleViewModal}
          />
        </Box>
      </Box>
      <ModalProj modalIsOpen={modalIsOpen} toggleModal={toggleModal} />
      <ModalProj modalEditIsOpen={modalEditIsOpen} toggleEditModal={toggleEditModal} />
      <ModalViewSavedProj modalViewIsOpen={modalViewIsOpen} toggleViewModal={toggleViewModal} />
    </main>
  );
}

export default HomePage;
