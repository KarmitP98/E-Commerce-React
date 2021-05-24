import {applyMiddleware, createStore} from 'redux';
import logger from 'redux-logger';
import {persistStore} from 'redux-persist';
import createSagaMiddleware from 'redux-saga'

import rootReducer from './root-reducer';
import rootSaga from "./root.saga";

const sageMiddleware = createSagaMiddleware()

const middlewares = [sageMiddleware];

if (process.env.NODE_ENV === 'development')
  middlewares.push(logger)

export const store = createStore(rootReducer, applyMiddleware(...middlewares,));

sageMiddleware.run(rootSaga)

export const persistor = persistStore(store);

const output = {store, persistor};

export default output;
