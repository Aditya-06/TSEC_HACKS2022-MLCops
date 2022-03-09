import {
  Button,
  Grid,
  Fab,
  Box,
  TextField,
  Divider,
  Typography,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import axios from 'axios';

import React, { useState, useEffect } from 'react';

const Generator = () => {
  const [title, setTitle] = useState('');
  const [abstract, setAbstract] = useState('');
  const [keywords, setKeywords] = useState('');

  const clearOptions = (e) => {
    e.preventDefault();
    setTitle('');
    setKeywords('');
    setAbstract('');
  };

  const callApi = async () => {
    let data = JSON.stringify({
      abstract,
    });

    let config = {
      method: 'post',
      url: '/workflow/generate_title/',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json',
      },
      data: data,
    };

    try {
      const response = await axios(config);
      setKeywords(response.data.details.keywords.toString());
      setTitle(response.data.details.title);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Grid
        container
        spacing={2}
        style={{ marginTop: '1rem', marginBottom: '2rem' }}
      >
        <Grid item sm={12} lg={12}>
          <TextField
            id="outlined-textarea"
            label="Abstract"
            placeholder="Lorem Ipsum"
            value={abstract}
            onChange={(e) => setAbstract(e.target.value)}
            multiline
            rows={4}
            fullWidth
          />
        </Grid>
      </Grid>
      <Divider />
      <Grid container spacing={2} style={{ marginTop: '2rem' }}>
        <Grid item lg={12}>
          <Typography variant="h5">Recommended Title</Typography>
        </Grid>
        <Grid item sm={12} lg={12}>
          <TextField
            label="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            fullWidth
            variant="outlined"
            color={'primary'}
          />
        </Grid>
      </Grid>
      <Grid container spacing={2} style={{ marginTop: '2rem' }}>
        <Grid item lg={12}>
          <Typography variant="h5">Recommended Keywords</Typography>
        </Grid>
        <Grid item sm={12} lg={12}>
          <TextField
            label="Keywords"
            value={keywords}
            onChange={(e) => setKeywords(e.target.value)}
            fullWidth
            variant="outlined"
            color={'primary'}
          />
        </Grid>
      </Grid>
      <Grid container spacing={2} style={{ marginTop: '2rem' }}>
        <Grid item xs={12} md={6}>
          <Button
            variant="contained"
            // color="success"
            style={{ backgroundColor: 'rgba(34,139,34)' }}
            component="span"
            fullWidth
            onClick={(e) => callApi(e)}
          >
            Submit
          </Button>
        </Grid>
        <Grid item xs={12} md={6}>
          <Button
            variant="contained"
            color="error"
            component="span"
            fullWidth
            onClick={(e) => clearOptions(e)}
          >
            Clear
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default Generator;
