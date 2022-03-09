import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Box from '@mui/material/Box';

import Alphabets from './Alphabet';

const DomainList = ({ selected, setSelected }) => {
  const [resDomaina, setResDomaina] = useState([]);
  // const [selected, setSelected] = useState([]);
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

  const getIds = (arr) => {
    const idArr = [];
    for (let i = 0; i < arr.length; i++) {
      idArr.push(arr[i].id);
    }
    return idArr;
  };

  const getSelected = async () => {
    let config = {
      method: 'get',
      url: '/workflow/domain/',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    };

    try {
      const response = await axios(config);
      const resObj = response.data.details;
      const idArr = getIds(resObj);
      // eslint-disable-next-line no-debugger
      debugger;
      setSelected(idArr);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    callGlobalDomains();
    getSelected();
  }, []);
  return (
    <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
      {Object.keys(resDomaina).map((item) => (
        <Alphabets
          key={item}
          letter={item}
          data={resDomaina[item]}
          selected={selected}
          setSelected={setSelected}
        />
      ))}
      {/* <Alphabets letter="B" /> */}
    </Box>
  );
};

export default DomainList;
