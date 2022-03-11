import { Button, Grid, Fab, Box, TextField, Divider } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import axios from 'axios';

import React, { useState, useEffect } from 'react';
import UploadRes from './UploadRes';

const PDFupload = () => {
  const [selectedPdf, setSelectedPdf] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [abstract, setAbstract] = useState('');
  const [keywords, setKeywords] = useState('');
  const [doi, setDoi] = useState('');
  const [open, setOpen] = React.useState(false);
  const [data, setData] = useState([]);

  const submitDOI = async (e) => {
    e.preventDefault();
    const axios = require('axios');
    let data = JSON.stringify({
      doi,
    });

    let config = {
      method: 'put',
      url: '/workflow/recommend_home/',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json',
      },
      data: data,
    };

    axios(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        setTitle(response.data.details.title);
        setAbstract(response.data.details.abstract);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleSelection = async (e) => {
    setOpen(true);
    setSelectedPdf(e.target.files[0]);
    e.preventDefault();
    let data = new FormData();
    data.append('file', e.target.files[0]);

    let config = {
      method: 'post',
      url: '/workflow/read_pdf/',
      headers: {
        // ...data.getHeaders(),
      },
      data: data,
    };

    axios(config)
      .then((response) => {
        // console.log(JSON.stringify(response.data));
        const data = response.data;
        setTitle(response.data.details.title);
        setAbstract(response.data.details.abstract);
      })
      .catch((error) => {
        console.log(error);
      });
    setOpen(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const axios = require('axios');
    let data = JSON.stringify({
      title: [title],
      abstract: [abstract],
    });

    let config = {
      method: 'post',
      url: '/workflow/recommend_history/',
      headers: {
        'Content-Type': 'application/json',
      },
      data: data,
    };

    axios(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        setData(response.data.details);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const clearOptions = (e) => {
    e.preventDefault();
    setSelectedPdf(null);
    setImageUrl(null);
    setTitle('');
    setAuthor('');
    setKeywords('');
    setAbstract('');
  };

  useEffect(() => {
    if (selectedPdf) {
      setImageUrl(URL.createObjectURL(selectedPdf));
    }
  }, [selectedPdf]);

  return (
    <>
      <Grid
        container
        spacing={2}
        style={{ marginTop: '1rem', marginBottom: '2rem' }}
      >
        <Grid item lg={6} md={12} p={2}>
          <input
            accept="pdf"
            type="file"
            id="select-image"
            style={{ display: 'none' }}
            onChange={(e) => handleSelection(e)}
          />
          <label htmlFor="select-image">
            <Button
              variant="contained"
              color="primary"
              component="span"
              fullWidth
            >
              Choose PDF
            </Button>
          </label>
        </Grid>
        <Grid item sm={12} lg={6}>
          <TextField
            label="File Selected"
            value={selectedPdf ? selectedPdf.name : 'No file chosen'}
            fullWidth
            variant="outlined"
            color={selectedPdf ? 'success' : 'primary'}
          />
        </Grid>
      </Grid>
      <Divider />

      <Grid
        container
        spacing={2}
        style={{ marginTop: '2rem', marginBottom: '2rem' }}
      >
        <Grid item sm={12} lg={9}>
          <TextField
            label="DOI"
            value={doi}
            fullWidth
            variant="outlined"
            color={'primary'}
            onChange={(e) => setDoi(e.target.value)}
          />
        </Grid>
        <Grid
          item
          sm={12}
          lg={3}
          style={{ display: 'flex', justifyContent: 'center' }}
        >
          <Button variant="contained" fullWidth onClick={(e) => submitDOI(e)}>
            Confirm
          </Button>
        </Grid>
      </Grid>
      <Divider />

      <Grid container spacing={2} style={{ marginTop: '2rem' }}>
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
      <Grid container spacing={2} style={{ marginTop: '2rem' }}>
        <Grid item xs={12} md={6}>
          <Button
            variant="contained"
            // color="success"
            style={{ backgroundColor: 'rgba(34,139,34)' }}
            component="span"
            fullWidth
            onClick={(e) => handleSubmit(e)}
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

      <Grid container>
        <Grid item xs={12} lg={12}>
          <UploadRes data={data} />
        </Grid>
      </Grid>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={false}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </>
  );
};

export default PDFupload;
