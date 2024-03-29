import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';
import { ThemeProvider, createTheme, responsiveFontSizes } from '@mui/material/styles';
import Header from '../../components/Header/Header';
import TextfieldResponsive from '../../components/TextfieldResponsive';
import GridProjs from '../../components/GridProjs/index';
import { getProjects } from '../../service/orangeApi';

const theme = createTheme();
const typographyResponsive = responsiveFontSizes(theme);

function Explore() {
  const [projectsInfo, setProjectsInfo] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [search, setValue] = useState('');

  const fetchProjects = async () => {
    const response = await getProjects();
    setProjectsInfo(response.data);
  };

  useEffect(() => {
    setProjectsInfo(fetchProjects());
  }, []);

  const handleSearch = (event) => {
    setValue(event.target.value);
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

  const [modalViewIsOpen, setModalViewIsOpen] = useState(false);
  const toggleViewModal = () => {
    setModalViewIsOpen(!modalViewIsOpen);
  };

  return (
    <main>
      <Header />
      <Box
        maxWidth="l"
        sx={{
          display: 'inline-flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '30px',
          width: '100%',
          // media
          '@media (max-width: 700px)': {
            alignItems: 'center',
          },
        }}
      >
        <Box sx={{
          width: '700px',
          height: 'auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          // media
          '@media screen and (max-width: 800px)': {
            width: '400px',
            display: 'flex',
            margin: '0 auto 0 auto',
          },
          '@media screen and (max-width: 450px)': {
            width: '200px',
            display: 'flex',
            margin: '0',
          },
        }}
        >
          <ThemeProvider theme={typographyResponsive}>
            <Typography
              variant="h4"
              style={{ wordWrap: 'break-word' }}
              sx={{
                fontSize: {
                  xs: '20px',
                  sm: '24px',
                  md: '28px',
                  lg: '34px',
                },
                lineHeight: {
                  xs: '20px',
                  sm: '24px',
                  md: '28px',
                  lg: '34px',
                },
                display: 'flex',
                margin: '80px 10px 100px 10px',
                textAlign: 'center',
                fontWeight: '400',
                letterSpacing: '0.25px',
                '@media screen and (max-width: 700px)': {
                  margin: '40px 10px 50px 10px',
                },
                '@media screen and (max-width: 300px)': {
                  margin: '10px 5px 20px 5px',
                },
              }}
            >
              Junte-se à comunidade de inovação,
              inspiração e descobertas, transformando experiências
              em conexões inesquecíveis
            </Typography>
          </ThemeProvider>
        </Box>
        <Box
          className="search"
          sx={{
            padding: '20px',
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
            marginTop: '34px',
            marginBottom: '30px',
            marginLeft: '30px',
            alignSelf: 'start',
            // media
            '@media screen and (max-width: 800px)': {
              alignItems: 'center',
              justifyContent: 'start',
              alignSelf: 'center',
              marginLeft: '0',
            },
          }}
        >
          <TextfieldResponsive value={search} setValue={handleSearch} sx={{ display: 'flex' }} />
        </Box>
        <Box
          className="box_projs"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'start',
            gap: '30px',
            margin: '30px',
          }}
        >
          <GridProjs projectsInfo={filteredProjects} toggleViewModal={toggleViewModal} />
        </Box>
      </Box>
    </main>
  );
}

export default Explore;
