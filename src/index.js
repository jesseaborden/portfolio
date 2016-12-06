import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Components/Home';
import {browserHistory} from 'react-router'
import Routes from './routes';

import './index.css';

ReactDOM.render(
  <Routes />,
  document.getElementById('root')
);
