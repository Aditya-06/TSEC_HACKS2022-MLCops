import React, { useState } from 'react';
import { Box, Button, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import axios from 'axios';

const Searchbar = ({ setCall, setKey }) => {
  const [input, setInput] = useState('');
  const submitSearchInput = async (e) => {
    if (input !== '') {
      setCall(true);
      setKey(input);
    }
    e.preventDefault();

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
