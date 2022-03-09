import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Box from '@mui/material/Box';

import Alphabets from './Alphabet';

const DomainList = () => {
  const [resDomaina, setResDomaina] = useState([]);
  const callGlobalDomains = async () => {
    let config = {
      method: 'get',
      url: '/workflow/global_domain/',
      headers: {},
    };

    try {
      const response = await axios(config);
      setResDomaina(response.data.details);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    callGlobalDomains();
  }, []);
  return (
    <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
      {Object.keys(resDomaina).map((item) => (
        <Alphabets key={item} letter={item} data={resDomaina[item]} />
      ))}
      {/* <Alphabets letter="B" /> */}
    </Box>
  );
};

export default DomainList;
