import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import AssignmentIcon from '@mui/icons-material/Assignment';
import HomeIcon from '@mui/icons-material/Home';
import { Link } from 'react-router-dom';
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import SearchIcon from '@mui/icons-material/Search';
import SettingsIcon from '@mui/icons-material/Settings';

export const mainListItems = (
  <React.Fragment>
    <Link to="/home" style={{ textDecoration: 'none', color: 'grey' }}>
      <ListItemButton>
        <ListItemIcon>
          <HomeIcon />
        </ListItemIcon>
        <ListItemText primary="Home" />
      </ListItemButton>
    </Link>
    <Link to="/profile" style={{ textDecoration: 'none', color: 'grey' }}>
      <ListItemButton>
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary="Profile" />
      </ListItemButton>
    </Link>
    <Link to="/domain" style={{ textDecoration: 'none', color: 'grey' }}>
      <ListItemButton>
        <ListItemIcon>
          <BorderColorIcon />
        </ListItemIcon>
        <ListItemText primary="Domain Selection" />
      </ListItemButton>
    </Link>
    <Link to="/saved" style={{ textDecoration: 'none', color: 'grey' }}>
      <ListItemButton>
        <ListItemIcon>
          <SaveAltIcon />
        </ListItemIcon>
        <ListItemText primary="Saved" />
      </ListItemButton>
    </Link>
  </React.Fragment>
);

export const secondaryListItems = (
  <React.Fragment>
    <ListSubheader component="div" inset>
      Recommender
    </ListSubheader>
    <Link to="/upload" style={{ textDecoration: 'none', color: 'grey' }}>
      <ListItemButton>
        <ListItemIcon>
          <AssignmentIcon />
        </ListItemIcon>
        <ListItemText primary="Upload PDF" />
      </ListItemButton>
    </Link>
    <Link to="/title-rec" style={{ textDecoration: 'none', color: 'grey' }}>
      <ListItemButton>
        <ListItemIcon>
          <SettingsIcon />
        </ListItemIcon>
        <ListItemText primary="Generator" />
      </ListItemButton>
    </Link>
  </React.Fragment>
);
