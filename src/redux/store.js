import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './reducers/_root.reducer'; // imports ./redux/reducers/index.js
import rootSaga from './sagas/_root.saga'; // imports ./redux/sagas/index.js

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  // tells the saga middleware to use the rootReducer
  // rootSaga contains all of our other reducers
  rootReducer,
  // adds all middleware to our project including saga and logger
  applyMiddleware(sagaMiddleware),
);

// tells the saga middleware to use the rootSaga
// rootSaga contains all of our other sagas
sagaMiddleware.run(rootSaga);

export default store;