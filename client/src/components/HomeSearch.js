import { Box } from '@mui/material';
import React, { useState, useEffect } from 'react';
import PaperCard from './Card';
import axios from 'axios';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { Button, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const Reccomended = ({ call = false, key, setCall }) => {
  const [open, setOpen] = React.useState(false);
  const [input, setInput] = useState('');
  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  };
  const [data, setData] = useState([]);
  const [bookmarked, setBookmarked] = useState(
    JSON.parse(localStorage.getItem('bookmarked'))
  );
  const getRecc = async () => {
    setOpen(true);
    let data = '';

    let config = {
      method: 'get',
      url: '/workflow/recommend_home/',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
      data: data,
    };

    try {
      const response = await axios(config);
      setData(response.data.details);
      setOpen(false);
    } catch (error) {
      console.log(error);
      setOpen(false);
    }
  };
  useEffect(() => {
    getRecc();
  }, []);

  const keyRec = async () => {
    setOpen(true);
    let data = JSON.stringify({
      search_key: input,
    });

    let config = {
      method: 'post',
      url: '/workflow/recommend_home/',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json',
      },
      data: data,
    };

    try {
      const response = await axios(config);
      setData(response.data.details);
      setOpen(false);
    } catch (error) {
      console.log(error);
      setOpen(false);
    }
  };

  return (
    <div>
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
          <Button onClick={(e) => keyRec(e)}>
            <SearchIcon />
          </Button>
        </Box>
      </Box>
      <Box>
        {data ? (
          data.map((rPaper) => (
            <PaperCard
              title={rPaper.title[0]}
              authors={rPaper.authors}
              date={rPaper.date}
              abstract={rPaper.abstract ? rPaper.abstract : '-'}
              key={rPaper.url}
              url={rPaper.url}
              references={rPaper.references}
              doi={rPaper.doi ? rPaper.doi : '-'}
              publisher={rPaper.publisher ? rPaper.publisher : '-'}
              bookmarked={bookmarked}
              setBookmarked={setBookmarked}
            />
          ))
        ) : (
          <></>
        )}
        <PaperCard />
      </Box>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
        // onClick={handleClose}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
};

export default Reccomended;
