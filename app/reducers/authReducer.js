import { SET_CURRENT_USER, LOGIN_USER, REGISTER_USER } from '../actions';
import { fulfilled } from '../helpers';

const initialState = {
  loginSuccess: false,
  registerSuccess: false,
  isAuthenticated: false
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case fulfilled(LOGIN_USER):
      return {
        ...state,
        loginSuccess: true,
        data: action.payload.data.data[0]
      };
    case fulfilled(REGISTER_USER):
      console.log('regis==>', action.payload);

      return {
        ...state,
        registerSuccess: true,
        data: action.payload.data.data[0]
      };
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: true,
        ...action.payload
      };
    default:
      return state;
  }
};

export default authReducer;
