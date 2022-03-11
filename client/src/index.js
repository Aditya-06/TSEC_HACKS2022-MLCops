import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import axios from 'axios';

axios.defaults.baseURL =
  'https://5c5b-2409-4040-d8a-ea32-a339-2fbc-c7a7-acf8.ngrok.io';
ReactDOM.render(
  // <React.StrictMode>
  <App />,
  // </React.StrictMode>
  document.getElementById('root')
);
