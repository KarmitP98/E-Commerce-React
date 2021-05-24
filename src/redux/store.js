import {applyMiddleware, createStore} from 'redux';
import logger from 'redux-logger';
import {persistStore} from 'redux-persist';
import createSagaMiddleware from 'redux-saga'


import rootReducer from './root-reducer';
import {fetchCollectionsStart} from "./shop/shop.saga";

const sageMiddleware = createSagaMiddleware()

const middlewares = [sageMiddleware];

if (process.env.NODE_ENV === 'development')
  middlewares.push(logger)

export const store = createStore(rootReducer, applyMiddleware(...middlewares,));

sageMiddleware.run(fetchCollectionsStart)

export const persistor = persistStore(store);

const output = {store, persistor};

export default output;
