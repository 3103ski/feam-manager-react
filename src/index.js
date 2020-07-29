// FRAMEWORK / UTILITY
import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
// REDUCERS
import appReducer from './store/reducers/appReducer';
import flightReducer from './store/reducers/flightReducer';
import clientReducer from './store/reducers/clientsReducer';
// LOCAL
import App from './App';
// STYLES
import './index.css';

const rootReducer = combineReducers({
	app: appReducer,
	flights: flightReducer,
	clients: clientReducer,
});

const logger = (store) => {
	return (next) => {
		return (action) => {
			const result = next(action);
			return result;
		};
	};
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
	rootReducer,
	composeEnhancers(applyMiddleware(logger, thunk))
);

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			{/* <React.StrictMode> */}
			<App />
			{/* </React.StrictMode> */}
		</BrowserRouter>
	</Provider>,
	document.getElementById('root')
);

serviceWorker.unregister();
