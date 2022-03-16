import { Box } from '@mui/material';
import React from 'react';
import PaperCard from './Card';

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
