
import { createStore, compose, applyMiddleware } from 'redux';
import { rootReducer } from './rootReducer/rootReducer';
// import createSagaMiddleware from 'redux-saga';
// import rootSaga from './redux/sagas';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const sagaMiddleware = createSagaMiddleware();

export const store = createStore(rootReducer, compose(
  // applyMiddleware(sagaMiddleware),
  composeEnhancers()
));

// sagaMiddleware.run(rootSaga);

