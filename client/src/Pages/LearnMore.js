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
  Divider,
} from '@mui/material';

import Navigation from '../components/Navigation';
import PaperDetails from '../components/PaperDetails';
import Graph from '../components/Graph';

const mdTheme = createTheme();

const LearnMore = () => {
  const [data] = useState(JSON.parse(localStorage.getItem('rPaper')));

  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: 'flex', width: '100%' }}>
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
                  <Typography variant="h4">Research Paper Details</Typography>
                </Paper>
              </Grid>
              <Grid item xs={12} md={9} lg={6}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    // height: '80vh',
                  }}
                >
                  <PaperDetails />
                </Paper>
              </Grid>
              <Grid item xs={12} md={3} lg={6}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  <Graph />
                  <Divider />
                  <a
                    href={data.url}
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                      textDecoration: 'none',
                    }}
                  >
                    <Button fullWidth>Go to PDF</Button>
                  </a>
                </Paper>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default LearnMore;
