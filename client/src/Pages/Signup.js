import React, { useState } from 'react';
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  FormControlLabel,
  Checkbox,
  Link,
  Paper,
  Box,
  Grid,
  Typography,
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useToasts } from 'react-toast-notifications';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const theme = createTheme();

export default function Signup() {
  const history = useHistory();
  const [fname, setFname] = useState('');
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [lname, setLname] = useState('');

  const { addToast } = useToasts();
  // Handle the Sign-up of the user
  const handleSubmit = async (event) => {
    event.preventDefault();
    // eslint-disable-next-line no-console
    console.log(
      `email: ${email}\npassword: ${pass}\nFirst name: ${fname}\nLast Name: ${lname}`
    );

    let data = JSON.stringify({
      name: fname + lname,
      email,
      password: pass,
    });

    let config = {
      method: 'post',
      url: '/auth/register/',
      headers: {
        'Content-Type': 'application/json',
      },
      data: data,
    };

    try {
      const response = await axios(config);
      console.log(response.data);
      addToast('Sign-up Successful!', { appearance: 'success' });

      try {
        let dat = JSON.stringify({
          email,
          password: pass,
        });

        let config = {
          method: 'post',
          url: '/auth/token/',
          headers: {
            'Content-Type': 'application/json',
          },
          data: dat,
        };

        const res = await axios(config);
        console.log(res.data);
        localStorage.setItem('token', response.data.data.tokens.access);
        localStorage.setItem('info', data);
        history.push('/domain');
      } catch (e) {
        console.log(e);
        addToast('Error', { appearance: 'error' });
      }
    } catch (error) {
      console.log(error);
      addToast('Error', { appearance: 'error' });
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />

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
              Sign up
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 3 }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="given-name"
                    name="firstName"
                    required
                    fullWidth
                    id="firstName"
                    label="First Name"
                    value={fname}
                    onChange={(e) => setFname(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="lastName"
                    label="Last Name"
                    name="lastName"
                    autoComplete="family-name"
                    value={lname}
                    onChange={(e) => setLname(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="new-password"
                    value={pass}
                    onChange={(e) => setPass(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormControlLabel
                    control={
                      <Checkbox value="allowExtraEmails" color="primary" />
                    }
                    label="I want to receive inspiration, marketing promotions and updates via email."
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign Up
              </Button>
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link href="#" variant="body2">
                    Already have an account? Sign in
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage:
              'url(https://ncm.cikd.ca/wp-content/uploads/2021/12/Best-title-870x450.jpg)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light'
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      </Grid>
    </ThemeProvider>
  );
}
