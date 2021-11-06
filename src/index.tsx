// Import from libs
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

// Import data
import { store } from './redux/store';

// Import components
import { App } from './components/App';

// Main code
ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);
