import React from 'react';
import ReactDOM from 'react-dom';
import bootstrap from 'bootstrap';
import App from './components/App';
import { BrowserRouter } from 'react-router-dom'
require('../scss/application.scss');
require('../css/style.css');

ReactDOM.render((
    <BrowserRouter>
      <App />
    </BrowserRouter>),
  document.getElementById('root'));
