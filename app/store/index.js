import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise-middleware';
import thunk from 'redux-thunk';
import { errorHandler } from '../helpers';
import { composeWithDevTools } from 'redux-devtools-extension';
import { reducers } from '../reducers';

const configureStore = () => {
  return createStore(
    reducers,
    {},
    composeWithDevTools(applyMiddleware(errorHandler, thunk, promise))
  );
};

export default configureStore;
