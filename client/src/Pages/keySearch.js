import React, { useEffect, useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {
  CssBaseline,
  Box,
  Toolbar,
  Container,
  Grid,
  Paper,
  Typography,
  Button,
} from '@mui/material';
import axios from 'axios';
import { useParams } from 'react-router-dom';

import Navigation from '../components/Navigation';
import Generator from '../components/Generator';
import PaperCard from '../components/Card';

const mdTheme = createTheme();

const KeySearch = () => {
  const [inputData, setInputData] = useState([]);
  const { key } = useParams();

  useEffect(() => {
    let data_input = JSON.stringify({
      search_key: key.replace('-', ' '),
    });

    let config = {
      method: 'post',
      url: '/workflow/recommend_home/',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json',
      },
      data: data_input,
    };

    axios(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        setInputData(response.data.details);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />

        <Navigation />
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
          }}
        >
          <Toolbar />
          <Container maxWidth="xl" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={12} lg={12}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    // height: '80vh',
                  }}
                >
                  <Typography variant="h4">
                    Keyword Search: {key.replace('-', ' ')}
                  </Typography>
                </Paper>
              </Grid>

              <Grid item xs={12} md={12} lg={12}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    // height: '80vh',
                  }}
                >
                  {inputData && inputData.length > 0 ? (
                    inputData.map((rPaper) => (
                      <PaperCard
                        title={rPaper.title[0]}
                        authors={rPaper.authors}
                        // date={rPaper.date == '-' ? '2020-7-1' : rPaper.date}
                        abstract={rPaper.abstract ? rPaper.abstract : '-'}
                        key={rPaper.url + rPaper.title[0]}
                        url={rPaper.url}
                        references={rPaper.references}
                        // doi={rPaper.doi != '-' ? rPaper.doi : '2901/29124'}
                        publisher={rPaper.publisher ? rPaper.publisher : '-'}
                      />
                    ))
                  ) : (
                    <></>
                  )}
                </Paper>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default KeySearch;
