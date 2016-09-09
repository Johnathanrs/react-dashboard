import React from 'react';
import { render } from 'react-dom';
import { Router, Route, Link, browserHistory, hashHistory } from 'react-router';

import settings from './app.settings';
console.log('Frontend settings', settings);

//require('../../node_modules/reset-css/reset.css');

require('./styles/style.css');
//require('../../../css/style.css');

import Main from './components/Main.jsx';
import Dashboard from './components/Dashboard.jsx';
import System from './components/System.jsx';
import Application from './components/Application.jsx';


render(<Main>
  <Router history={browserHistory}>
    <Route path="/" component={Dashboard}/>
    <Route path="/system" component={System}/>
    <Route path="/application" component={Application}/>
  </Router>
</Main>, document.getElementById('root'));

