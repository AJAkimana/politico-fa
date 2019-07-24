import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise-middleware';
import thunk from 'redux-thunk';
import errorHandler from '../helpers/errorHandler';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from '../reducers';

const configureStore = () => {
  return createStore(
    rootReducer,
    {},
    composeWithDevTools(applyMiddleware(errorHandler, thunk, promise))
  );
};

export default configureStore;
