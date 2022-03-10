import { Box } from '@mui/material';
import React, { useState, useEffect } from 'react';
import PaperCard from './Card';
import axios from 'axios';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

const UploadRes = ({ data = [] }) => {
  return (
    <div>
      <Box>
        {data ? (
          data.map((rPaper) => (
            <PaperCard
              title={rPaper.title[0]}
              authors={rPaper.authors}
              date={rPaper.date ? rPaper.date : '2021-5-17'}
              abstract={rPaper.abstract ? rPaper.abstract : '-'}
              key={rPaper.url}
              url={rPaper.url}
              references={rPaper.references}
              doi={rPaper.doi ? rPaper.doi : '238901/3928'}
              publisher={rPaper.publisher ? rPaper.publisher : '-'}
            />
          ))
        ) : (
          <></>
        )}
        <PaperCard />
      </Box>
    </div>
  );
};

export default UploadRes;
