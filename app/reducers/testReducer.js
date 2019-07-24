import { TEST } from '../actions/actionTypes';

const initialState = {
  message: ''
};

const testReducer = (state = initialState, action) => {
  switch (action.type) {
    case TEST:
      return {
        ...state,
        message: 'Action dispatched'
      };
    default:
      return state;
  }
};

export default testReducer;
