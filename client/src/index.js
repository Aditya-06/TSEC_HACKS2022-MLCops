import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import axios from 'axios';

axios.defaults.baseURL =
  'https://2423-2405-204-289-1fd6-91e7-fd42-3a74-615c.ngrok.io';
ReactDOM.render(
  // <React.StrictMode>
  <App />,
  // </React.StrictMode>
  document.getElementById('root')
);
