import { Button, Grid, Fab, Box, TextField, Divider } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

import React, { useState, useEffect } from 'react';

const PDFupload = () => {
  const [selectedPdf, setSelectedPdf] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [abstract, setAbstract] = useState('');
  const [keywords, setKeywords] = useState('');

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
        <Grid item xl={6} md={12} p={2}>
          <input
            accept="pdf"
            type="file"
            id="select-image"
            style={{ display: 'none' }}
            onChange={(e) => setSelectedPdf(e.target.files[0])}
          />
          <label htmlFor="select-image">
            <Button
              variant="contained"
              color="primary"
              component="span"
              fullWidth
            >
              Upload Image
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
      <Grid container spacing={2} style={{ marginTop: '2rem' }}>
        <Grid item sm={12} lg={6}>
          <TextField
            label="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            fullWidth
            variant="outlined"
            color={'primary'}
          />
        </Grid>
        <Grid item sm={12} lg={6}>
          <TextField
            label="Author"
            value={author}
            fullWidth
            variant="outlined"
            color={'primary'}
            onChange={(e) => setAuthor(e.target.value)}
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
        <Grid item sm={12} lg={12}>
          <TextField
            id="outlined-textarea"
            label="Keywords"
            placeholder="keyword1, keyword2"
            fullWidth
            value={keywords}
            onChange={(e) => setKeywords(e.target.value)}
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

export default PDFupload;
