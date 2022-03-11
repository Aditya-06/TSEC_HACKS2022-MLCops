import { Box } from '@mui/material';
import React, { useState, useEffect } from 'react';
import PaperCard from './Card';
import axios from 'axios';

const SavedPaper = () => {
  const [data, setData] = useState([]);
  const getRecc = async () => {
    let config = {
      method: 'get',
      url: '/workflow/saved/',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    };
    try {
      const response = await axios(config);
      setData(response.data.details);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getRecc();
  }, []);

  return (
    <div>
      <Box>
        {data && data.length > 0 ? (
          data.map((rPaper) => {
            // eslint-disable-next-line no-debugger
            if (rPaper != ']' && rPaper != '[') {
              return (
                <PaperCard
                  title={
                    Array.isArray(rPaper.title) ? rPaper.title[0] : rPaper.title
                  }
                  authors={rPaper.authors ? rPaper.authors : '-'}
                  date={rPaper.date ? rPaper.date : '-'}
                  abstract={rPaper.abstract ? rPaper.abstract : '-'}
                  key={rPaper.url ? rPaper.url : Math.random()}
                  url={rPaper.url ? rPaper.url : '-'}
                  references={rPaper.references ? rPaper.references : 0}
                  doi={rPaper.doi ? rPaper.doi : '-'}
                  publisher={rPaper.publisher ? rPaper.publisher : '-'}
                  isBooked={true}
                />
              );
            } else {
              return <></>;
            }
          })
        ) : (
          <></>
        )}
      </Box>
    </div>
  );
};

export default SavedPaper;
