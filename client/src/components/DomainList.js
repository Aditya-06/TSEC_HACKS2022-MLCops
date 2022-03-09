import React from 'react';
import Box from '@mui/material/Box';

import Alphabets from './Alphabet';

const DomainList = () => {
  return (
    <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
      <Alphabets letter="A" />
      <Alphabets letter="B" />
    </Box>
  );
};

export default DomainList;
