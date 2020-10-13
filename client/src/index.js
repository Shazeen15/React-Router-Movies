import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';

import './index.css';
import App from './App';

// You'll need to wrap <App /> for routing to work
const rootElement = document.getElementById("root");

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  rootElement
);