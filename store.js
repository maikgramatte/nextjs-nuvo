/* eslint-disable import/no-extraneous-dependencies */
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import UserReducer, { InitialState } from './src/Reducer/UserReducer';

const createStoreExport = (initialStatePassed = InitialState) => {
  const store = createStore(
    UserReducer,
    initialStatePassed,
    composeWithDevTools(applyMiddleware(logger, thunkMiddleware)),
  );

  return store;
};

export default createStoreExport;
