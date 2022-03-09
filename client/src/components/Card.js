import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import { IconButton, Stack } from '@mui/material';
import BookmarksIcon from '@mui/icons-material/Bookmarks';

export default function PaperCard() {
  const [like, setLike] = useState(false);
  const [likeCount, setlikeCount] = useState(0);
  const [dislikeCount, setDislikeCount] = useState(0);
  const [dislike, setDislike] = useState(false);
  const [booked, setBooked] = useState(false);

  const toggleLike = (e) => {
    e.preventDefault();
    setLike(!like);
    setlikeCount(like ? 0 : 1);
    setDislike(false);
    setDislikeCount(0);
  };

  const toggleDislike = (e) => {
    e.preventDefault();
    setDislike(!dislike);
    setDislikeCount(dislike ? 0 : 1);
    setLike(false);
    setlikeCount(0);
  };

  return (
    <Card sx={{ minWidth: 275, margin: '2rem 0 0 0' }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Word of the Day
        </Typography>
        <Typography variant="h5" component="div">
          Three special flasks with graduated necks (i) bulb 45 ml, scale 5 ml
          (II) bulb 150 ml scale 10 ml (iii) bulb 200 ml scale 25ml
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          adjective
        </Typography>
        <Typography variant="body2">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <div
        style={{
          display: 'flex',
          width: '100%',
          justifyContent: 'space-between',
        }}
      >
        <CardActions style={{ display: 'flex' }}>
          <Button size="small">Learn More</Button>
          <div style={{ justifySelf: 'flex-end' }}></div>
          <Stack direction="row" spacing={1}>
            <IconButton
              onClick={(e) => toggleLike(e)}
              style={{ color: like ? 'green' : 'grey' }}
            >
              <ThumbUpIcon />
              <div style={{ marginLeft: '0.2rem' }}>{likeCount}</div>
            </IconButton>
            <IconButton
              onClick={(e) => toggleDislike(e)}
              style={{ color: dislike ? 'red' : 'grey' }}
            >
              <ThumbDownAltIcon />
              <div style={{ marginLeft: '0.2rem' }}>{dislikeCount}</div>
            </IconButton>
          </Stack>
        </CardActions>
        <Stack>
          <IconButton
            onClick={() => setBooked(!booked)}
            style={{ color: booked ? 'blue' : 'grey' }}
          >
            <BookmarksIcon />
          </IconButton>
        </Stack>
      </div>
    </Card>
  );
}
