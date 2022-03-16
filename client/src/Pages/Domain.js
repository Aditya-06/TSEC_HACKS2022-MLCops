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
import { useToasts } from 'react-toast-notifications';

import Navigation from '../components/Navigation';
import DomainList from '../components/DomainList';

const mdTheme = createTheme();

const Domain = () => {
  const { addToast } = useToasts();
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
      console.log(response.data);
      addToast('Saved!', { appearance: 'success' });
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
            // height: '100vh',
            overflow: 'auto',
          }}
        >
          <Toolbar />
          <Container maxWidth="xl" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={3}>
              {/* Chart */}
              <Grid item xs={10} md={10} lg={10}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    // height: '80vh',
                  }}
                >
                  <Typography variant="h4">Domain Selection</Typography>
                </Paper>
              </Grid>
              <Grid item xs={2} md={2} lg={2}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',

                    // height: '80vh',
                  }}
                >
                  <Button
                    variant="contained"
                    color="success"
                    style={{ alignSelf: 'center' }}
                    onClick={(e) => saveChanges(e)}
                  >
                    Save
                  </Button>
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
                  <DomainList selected={selected} setSelected={setSelected} />
                </Paper>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default Domain;
