import { TEST } from './actionTypes';

export const testAction = () => dispatch => {
  dispatch({
    type: TEST
  });
};
