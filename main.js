import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux'
import { rootReducer } from './src/reducer.js'
import App from './src/App.jsx';

const store = createStore(rootReducer);

ReactDOM.render(
	<Provider store={store}>
	  <App />
	</Provider>, 
	document.getElementById('app'));
