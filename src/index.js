import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
//import Function2 from './Function2';
//import User from './User';
//import File from './File';
//import Construct from './Construct';
import Eventex from './Eventex';

import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
 <Eventex />  
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
