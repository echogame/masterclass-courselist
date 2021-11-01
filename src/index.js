import React from 'react';
import ReactDOM from 'react-dom';

import {RequestProvider} from 'react-request-hook';
import axios from 'axios';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const axiosInstance = axios.create({
  baseURL: 'https://mc-dev-5.herokuapp.com/',
  headers: {
    'Content-Type': 'application/json'
  }
});

ReactDOM.render(
  <React.StrictMode>
    <RequestProvider value={axiosInstance}>
      <App />
    </RequestProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
