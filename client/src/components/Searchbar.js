import React, { useState } from 'react';
import { Box, Button, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const Searchbar = () => {
  const [input, setInput] = useState('');
  const submitSearchInput = (e) => {
    e.preventDefault();
    // eslint-disable-next-line no-console
    console.log(`Serach: ${input}`);
  };
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          // justifyContent: 'center',
        }}
      >
        <Box
          component="form"
          noValidate
          autoComplete="off"
          sx={{
            width: '85%',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <TextField
            fullWidth
            id="outlined-basic"
            label="Search"
            variant="outlined"
            size="small"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </Box>
        <Box
          component="form"
          noValidate
          autoComplete="off"
          sx={{
            width: '5%',
            display: 'flex',
            alignItems: 'center',
            margin: '0.5rem',
          }}
        >
          <Button onClick={(e) => submitSearchInput(e)}>
            <SearchIcon />
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default Searchbar;
