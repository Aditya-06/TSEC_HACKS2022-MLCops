import { Button, Grid, Fab, Box, TextField } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

import React, { useState, useEffect } from 'react';

const PDFupload = () => {
  const [selectedPdf, setSelectedPdf] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    if (selectedPdf) {
      setImageUrl(URL.createObjectURL(selectedPdf));
    }
  }, [selectedPdf]);

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xl={6} md={12} p={3}>
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
          {selectedPdf ? (
            <TextField
              label="File Selected"
              value={selectedPdf.name}
              fullWidth
              variant="filled"
              color="success"
            //   focused
              //   disabled
            />
          ) : (
            <></>
          )}
          {/* {imageUrl && selectedPdf && (
        <Box mt={2} textAlign="center">
          <div>Image Preview:</div>
          <img src={imageUrl} alt={selectedPdf.name} height="100px" />
        </Box>
      )} */}
        </Grid>
      </Grid>
    </>
  );
};

export default PDFupload;
