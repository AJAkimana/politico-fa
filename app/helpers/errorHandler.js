import isPromise from 'is-promise';
import { Notifier } from './notifier';

const errorHandler = () => {
  return next => action => {
    if (!isPromise(action.payload)) {
      return next(action);
    }

    if (!action.meta || !action.meta.localError) {
      return next(action).catch(error => {
        console.log(error.response);
      });
    }

    return next(action);
  };
};
export { errorHandler };
