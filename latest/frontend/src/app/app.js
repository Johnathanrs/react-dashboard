import React from 'react';
import ReactDOM from 'react-dom';

import settings from './app.settings';
console.log('Frontend settings', settings);

//require('../../node_modules/reset-css/reset.css');

require('./styles/style.css');

import Main from './components/Main.jsx';

ReactDOM .render(<Main />, document.getElementById('root'));
