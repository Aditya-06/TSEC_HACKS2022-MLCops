import React, { useState } from 'react';
import { Divider, Grid } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import { IconButton, Stack } from '@mui/material';
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

export default function PaperCard({
  title = 'Research Paper',
  abstract = '-',
  authors = '-',
  date = '-',
  doi = '-',
  references = '-',
  url = '-',
  publisher = '-',
  bookmarked,
  setBookmarked,
  isBooked = false,
}) {
  const [like, setLike] = useState(false);
  const [likeCount, setlikeCount] = useState(0);
  const [dislikeCount, setDislikeCount] = useState(0);
  const [dislike, setDislike] = useState(false);
  const [booked, setBooked] = useState(isBooked);

  const history = useHistory();

  const lMore = (e) => {
    e.preventDefault();
    if (abstract !== '-') {
      let data = JSON.stringify({
        abstract,
      });

      let config = {
        method: 'post',
        url: '/workflow/history/',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
          'Content-Type': 'application/json',
        },
        data: data,
      };

      axios(config)
        .then((response) => {
          console.log(JSON.stringify(response.data));
        })
        .catch((error) => {
          console.log(error);
        });
    }

    localStorage.setItem(
      'rPaper',
      JSON.stringify({
        title,
        abstract,
        authors,
        date,
        doi,
        references,
        url,
        publisher,
      })
    );
    history.push('/learn-more');
  };

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

  const addBookMark = async (e) => {
    e.preventDefault();
    let store = [];
    if (bookmarked.length > 0) {
      store = [
        ...bookmarked,
        {
          title,
          abstract,
          authors,
          date,
          doi,
          references,
          url,
          publisher,
        },
      ];
    } else {
      store = [
        {
          title,
          abstract,
          authors,
          date,
          doi,
          references,
          url,
          publisher,
        },
      ];
    }

    setBookmarked(store);
    let data = JSON.stringify({
      save_list: store,
    });

    let config = {
      method: 'post',
      url: '/workflow/saved/',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json',
      },
      data: data,
    };

    try {
      const response = await axios(config);
      console.log(response);
      localStorage.setItem('bookmarked', JSON.stringify(store));
      setBooked(true);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Card sx={{ minWidth: 275, margin: '2rem 0 0 0' }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {authors}
        </Typography>
        <Typography variant="h5" component="div">
          {title}
        </Typography>
        <Typography sx={{ mb: 1.5, mt: 1 }} color="text.secondary">
          {`Publisher: ${publisher}`}
        </Typography>
        <Typography
          sx={{ mb: 2 }}
          variant="body2"
        >{`Abstract: ${abstract}`}</Typography>
        <Divider />
        <Grid container>
          <Grid item lg={6} sm={12}>
            <Typography sx={{ mb: 1, mt: 1.5 }} color="text.secondary">
              {`Date: ${date}`}
            </Typography>
          </Grid>
          <Grid item lg={6} sm={12}>
            <Typography sx={{ mb: 1, mt: 1.5 }} color="text.secondary">
              {`DOI: ${doi}`}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
      <div
        style={{
          display: 'flex',
          width: '100%',
          justifyContent: 'space-between',
        }}
      >
        <CardActions style={{ display: 'flex' }}>
          <Button size="small" onClick={(e) => lMore(e)}>
            Learn More
          </Button>
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
            onClick={(e) => addBookMark(e)}
            style={{ color: booked ? 'blue' : 'grey' }}
          >
            <BookmarksIcon />
          </IconButton>
        </Stack>
      </div>
    </Card>
  );
}
