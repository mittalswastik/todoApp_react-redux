import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux'
import { root } from './src/reducer.js'
import App from './src/App.jsx';

ReactDOM.render(
	<Provider createStore={root}>
		<App />
	</Provider>, 
	document.getElementById('app'));
