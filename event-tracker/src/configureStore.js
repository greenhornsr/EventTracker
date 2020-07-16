// All the logic related to configuring the store - including importing reducers, middleware, and enhancers - handled in a dedicated file.

import { applyMiddleware, compose, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';

import monitorReducersEnhancer from './enhancers/monitorReducer';
import loggerMiddleware from './middleware/logger';
import rootReducer from './reducers';

// exported function
export default function  configureStore(preloadedState) {
    // middleware
    const middlewares = [loggerMiddleware, thunkMiddleware];
    const middlewareEnhancer = applyMiddleware(...middlewares);

    // enhancers
    const enhancers = [middlewareEnhancer, monitorReducersEnhancer];
    const composedEnhancers = compose(...enhancers);

    const store = createStore(rootReducer, preloadedState, composedEnhancers);

    return store
}
