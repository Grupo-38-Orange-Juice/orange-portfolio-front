import React, { useContext, useEffect, useState } from 'react';
import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';
import Header from '../../components/Header/Header';
import CardPerfil from '../../components/CardPerfil';
import TextfieldResponsive from '../../components/TextfieldResponsive';
import GridProjs from '../../components/GridProjs/index';
import { ProjectsContext } from '../../context/AuthProvider/projectsProvider';
import CreateModalProject from '../../components/Modals/CreateModalProject';
import FeedbackModal from '../../components/Modals/FeedbackModal';

function HomePage() {
  const { projectsInfo, fetchProjects } = useContext(ProjectsContext);
  const [createModalIsOpen, setCreateModalIsOpen] = useState(false);
  const [editModalIsOpen, setEditModal] = useState(false);
  const [feedbackModal, setFeedbackModal] = useState({ open: false, text: '' });
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [search, setValue] = useState('');

  const toggleCreateModal = () => {
    setCreateModalIsOpen(!createModalIsOpen);
  };

  const toggleFeedbackModal = (text) => {
    setFeedbackModal({ open: !feedbackModal.open, text });
  };

  const handleSearch = (event) => {
    setValue(event.target.value);
  };

  const toggleEditModal = () => {
    setEditModal(!editModalIsOpen);
  };

  useEffect(() => {
    if (projectsInfo) {
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
          '@media screen and (max-width: 800px)': {
            height: '0',
            display: 'flex',
            margin: '0 auto 0 auto',
          },
        }}
        >
          <CardPerfil toggleCreateModal={toggleCreateModal} />
        </Box>
        <Box
          className="search"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
            marginTop: '34px',
            marginBottom: '30px',
            alignSelf: 'start',
            // media
            '@media screen and (max-width: 800px)': {
              alignItems: 'center',
              justifyContent: 'start',
              alignSelf: 'center',
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
        <Box
          className="box_proj"
          alignItems="center"
          width="auto"
        >
          <GridProjs
            projectsInfo={filteredProjects}
            toggleEditModal={toggleEditModal}
            fetchProjects={fetchProjects}
            toggleFeedbackModal={toggleFeedbackModal}
            toggleCreateModal={toggleCreateModal}
            displayDefault={projectsInfo.length === 0}
          />
        </Box>
      </Box>
      <CreateModalProject
        isOpen={createModalIsOpen}
        toggleCreateModal={toggleCreateModal}
        toggleFeedbackModal={toggleFeedbackModal}
      />
      <CreateModalProject
        isOpen={editModalIsOpen}
        toggleCreateModal={toggleEditModal}
        toggleFeedbackModal={toggleFeedbackModal}
      />
      <FeedbackModal
        isOpen={feedbackModal.open}
        toggle={toggleFeedbackModal}
        text={feedbackModal.text}
      />
    </main>
  );
}

export default HomePage;
