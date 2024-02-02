import React, { useContext } from 'react';
import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';
import { ThemeProvider, createTheme, responsiveFontSizes } from '@mui/material/styles';
import Header from '../../components/Header/Header';
import TextfieldResponsive from '../../components/TextfieldResponsive';
import GridProjs from '../../components/GridProjs/index';
import { ProjectsContext } from '../../context/AuthProvider/projectsProvider';

const theme = createTheme();
const typographyResponsive = responsiveFontSizes(theme);

function Explore() {
  const { projectsInfo } = useContext(ProjectsContext);

  return (
    <main>
      <Header />
      <Box
        disableGutters
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
          // media
          '@media screen and (max-width: 700px)': {
            width: '400px',
            display: 'flex',
            margin: '0 auto 0 auto',
          },
          '@media screen and (max-width: 400px)': {
            width: '200px',
            display: 'flex',
            margin: '0 auto 0 auto',
          },
        }}
        >
          <Box sx={{
            alignItems: 'center',
            justifyContent: 'center',
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
                  }
                }}
              >
                Junte-se à comunidade de inovação,
                inspiração e descobertas, transformando experiências
                em conexões inesquecíveis
              </Typography>
            </ThemeProvider>
          </Box>
        </Box>
        <Box
          className="box_projs"
          disableGutters
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'start',
            gap: '20px',
          }}
        >
          <TextfieldResponsive />
          <GridProjs />
        </Box>
      </Box>
    </main>
  );
}

export default Explore;
