import React, { useState } from 'react';
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
  Stack,
  Button,
} from '@mui/material';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import { Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

// const data = [
//   { id: 23, name: 'Acturials' },
//   { id: 24, name: 'Architecture' },
//   { id: 35, name: 'Archeology' },
//   { id: 42, name: 'Ancient' },
// ];

const selectedArray = [24];

const flexContainer = {
  display: 'flex',
  flexDirection: 'row',
  padding: 0,
  margin: '2rem 0',
};

const Alphabets = ({ letter = 'A', data = [], selected, setSelected }) => {
  // const [selected, setSelected] = useState(selectedArray);

  const checkIfPresent = (id) => {
    return selected.includes(id);
  };

  const toggleSelection = (e, id) => {
    e.preventDefault();
    if (checkIfPresent(id)) {
      const newArray = [];

      for (let i = 0; i < selected.length; i++) {
        if (selected[i] !== id) {
          newArray.push(selected[i]);
        }
      }
      setSelected(newArray);
    } else {
      setSelected([...selected, id]);
    }
  };
  return (
    <>
      <Typography variant="h5">{letter.toUpperCase()}</Typography>
      <Divider />
      <nav
        aria-label="main mailbox folders"
        style={{ marginBottom: '2rem', marginTop: '0.5rem' }}
      >
        <Stack direction="row" spacing={2}>
          {data.map((item) => (
            <Button
              variant={checkIfPresent(item.id) ? 'contained' : 'outlined'}
              endIcon={checkIfPresent(item.id) ? <RemoveIcon /> : <AddIcon />}
              style={{ overflow: 'hidden' }}
              key={item.id}
              onClick={(e) => toggleSelection(e, item.id)}
            >
              {item.name}
            </Button>
          ))}
        </Stack>
      </nav>
    </>
  );
};

export default Alphabets;
