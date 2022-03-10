import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Typewriter from 'typewriter-effect';
import { Grid } from '@mui/material';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <div
      style={{
        backgroundImage: `url(https://1.bp.blogspot.com/-YwPmkkidXdQ/YFcHEWzpo1I/AAAAAAAAF1w/yZXs9Y920ZsytB9_upMsNjP8oE-Ei20uACLcBGAsYHQ/s16000/1.png)`,
        height: '100vh',
        margin: 0,
        padding: -2,
      }}
    >
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              MLCops
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
        <Grid
          container
          spacing={2}
          style={{
            width: '100%',
            justifyContent: 'center',
            display: 'flex',
            height: '80vh',
            alignContent: 'center',
          }}
        >
          <Grid
            item
            xs={12}
            style={{ display: 'flex', justifyContent: 'center' }}
          >
            <Grid
              item
              style={{
                fontSize: '6rem',
                color: 'white',
                fontFamily: 'Verdana',
              }}
            >
              <Typewriter
                onInit={(typewriter) => {
                  typewriter
                    .typeString('Research Paper Recommender')
                    .pauseFor(1000)
                    // .deleteAll()
                    .start();
                }}
              />

              {/* <Typography variant="h6"> */}
              {/* </Typography> */}
            </Grid>
          </Grid>
          <Grid
            item
            xs={12}
            style={{
              display: 'flex',
              justifyContent: 'center',
              paddingTop: '3rem',
              paddingBottom: '1rem',
              marginTop: '3rem',
            }}
          >
            <Box
              sx={{
                maxWidth: 'md',
              }}
            >
              <Typography variant="h6" style={{ color: 'lightgrey' }}>
                Erradicating the Re from Research!
              </Typography>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            lg={6}
            style={{ display: 'flex', justifyContent: 'flex-end' }}
          >
            <Link to="/home" style={{ textDecoration: 'none' }}>
              <Button variant="contained" style={{ boxShadow: '2' }}>
                Try it out
              </Button>
            </Link>
          </Grid>
          <Grid item xs={12} lg={6} style={{ display: 'flex' }}>
            <Link to="/sign-in" style={{ textDecoration: 'none' }}>
              <Button variant="contained">Get Started</Button>
            </Link>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Landing;
