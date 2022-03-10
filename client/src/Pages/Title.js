import React, { useState } from 'react';
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

import Navigation from '../components/Navigation';
import Generator from '../components/Generator';

const mdTheme = createTheme();

const Title = () => {
  const [selected, setSelected] = useState([]);
  const saveChanges = async (e) => {
    e.preventDefault();
    let data = JSON.stringify({
      domains: selected,
    });

    let config = {
      method: 'post',
      url: '/workflow/domain/',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json',
      },
      data: data,
    };

    try {
      const response = await axios(config);
    } catch (error) {
      console.log(error);
    }
  };
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
              {/* Chart */}
              <Grid item xs={12} md={12} lg={12}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    // height: '80vh',
                  }}
                >
                  <Typography variant="h4">Auto Generate Title</Typography>
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
                  <Generator />
                </Paper>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default Title;
