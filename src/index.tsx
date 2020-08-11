import React from 'react';
import ReactDOM from 'react-dom';
// import { createStore, compose, applyMiddleware } from 'redux';
// import { rootReducer } from './redux/rootReducer';
import { Provider } from 'react-redux';
// import createSagaMiddleware from 'redux-saga';
// import rootSaga from './redux/sagas';
import { store } from './redux/store';

import App from './App';



ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
