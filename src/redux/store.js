import { composeWithDevTools } from '@redux-devtools/extension';
import { applyMiddleware, createStore } from 'redux';
import freeze from 'redux-freeze';
import { createLogger } from 'redux-logger';
import { thunk } from 'redux-thunk';

import rootReducer from './ducks';

const configureStore = preloadedState => {
	const middlewares = [thunk, freeze];

	const logger = createLogger({ duration: true, diff: true });

	middlewares.push(logger);

	const middlewareEnhancer = applyMiddleware(...middlewares);

	const enhancers = [middlewareEnhancer];

	const composedEnhancers = composeWithDevTools(...enhancers);

	return createStore(rootReducer, preloadedState, composedEnhancers);
};

const store = configureStore();

export default store;
