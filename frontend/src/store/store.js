import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import sessionReducer from './sessionReducer';
import uiReducer from './uiReducer';
import spotReducer from './spotReducer';
import bookingReducer from './bookingReducer';

const rootReducer = combineReducers({
	session: sessionReducer,
	// ui: uiReducer,
	spots: spotReducer,
	bookings: bookingReducer
})

let enhancer;

if (process.env.NODE_ENV === 'production') {
  enhancer = applyMiddleware(thunk);
} else {
  const logger = require('redux-logger').default;
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState) => {
	return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;