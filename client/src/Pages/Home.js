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
} from '@mui/material';
import Navigation from '../components/Navigation';
import Searchbar from '../components/Searchbar';
import Reccomended from '../components/Reccomended';
import HomeSearch from '../components/HomeSearch';
import logo from '../logo.gif';

const mdTheme = createTheme();

function DashboardContent() {
  const [key, setKey] = useState('');
  const [call, setCall] = useState(false);
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
              <Grid item xs={12} md={8} lg={9}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    alignContent: 'center',
                    height: 240,
                    overflow: 'hidden',
                    backgroundImage:
                      'url(https://image.shutterstock.com/image-vector/liquid-color-background-design-fluid-260nw-1408596326.jpg)',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                  }}
                >
                  {/* <Typography
                    variant="h2"
                    style={{
                      color: 'whitesmoke',
                      diplay: 'flex',
                      justifyContent: 'center',
                      justifySelf: 'center',
                    }}
                  >
                    Research Paper Recommender
                  </Typography> */}
                </Paper>
              </Grid>
              <Grid item xs={12} md={4} lg={3}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 240,
                  }}
                >
                  <img src={logo} alt="typing"></img>
                </Paper>
              </Grid>
              {/* <Grid item xs={12}>
                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                  <Searchbar key={key} setKey={setKey} setCall={setCall} />
                </Paper>
              </Grid> */}
              <Grid item xs={12}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    // height: '50vh',
                  }}
                >
                  <HomeSearch call={call} key={key} setCall={setCall} />
                </Paper>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default function Home() {
  return <DashboardContent />;
}
