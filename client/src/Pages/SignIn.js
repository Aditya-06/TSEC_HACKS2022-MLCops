import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link as NavLink } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { useToasts } from 'react-toast-notifications';
import axios from 'axios';

const theme = createTheme();

export default function SignInSide() {
  const history = useHistory();
  const { addToast } = useToasts();
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const handleSubmit = async (event) => {
    event.preventDefault();
    let data = JSON.stringify({
      email,
      password: pass,
    });

    let config = {
      method: 'post',
      url: '/auth/token/',
      headers: {
        'Content-Type': 'application/json',
      },
      data: data,
    };

    try {
      const response = await axios(config);
      // eslint-disable-next-line no-debugger
      localStorage.setItem('token', response.data.data.tokens.access);
      localStorage.setItem('info', JSON.stringify({ email }));
      localStorage.setItem('bookmarked', '[]');
      addToast('Sign-in Successful!', { appearance: 'success' });
      history.push('/home');
    } catch (error) {
      addToast('Error!', { appearance: 'error' });

      console.log(error);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage:
              'url(https://www.niteshgpb.in/wp-content/uploads/2021/01/Unamed.png)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light'
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                // autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                value={pass}
                onChange={(e) => setPass(e.target.value)}
                autoComplete="current-password"
              />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item>
                  <NavLink to="/sign-up" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </NavLink>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
