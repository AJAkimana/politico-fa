import { http } from '../../helpers';
import { GET_OFFICES, GET_ONE_OFFICE, SAVE_OFFICE } from '../';

export const registerOffice = office => dispatch => {
  dispatch({
    type: SAVE_OFFICE,
    payload: http.post(`/offices`, office)
  });
};

export const getOffices = () => dispatch => {
  dispatch({
    type: GET_OFFICES,
    payload: http.get(`/offices`)
  });
};

export const getOneOffice = officeId => dispatch => {
  dispatch({
    type: GET_ONE_OFFICE,
    payload: http.get(`/offices/${officeId}`)
  });
};
