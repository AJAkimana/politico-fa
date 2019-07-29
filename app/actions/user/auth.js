import { http } from '../../helpers';
import { LOGIN_USER, REGISTER_USER, SET_CURRENT_USER } from '../';

export const loginUser = user => dispatch => {
  dispatch({
    type: LOGIN_USER,
    payload: http.post(`/auth/login`, user)
  });
};

export const setCurrentUser = user => dispatch => {
  dispatch({
    type: SET_CURRENT_USER,
    payload: user
  });
};

export const registerUser = user => dispatch => {
  dispatch({
    type: REGISTER_USER,
    payload: http.post(`/auth/signup`, user)
  });
};
