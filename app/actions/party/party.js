import { http } from '../../helpers';
import { SAVE_PARTY, GET_PARTIES, GET_ONE_PARTY } from '../';

export const registerParty = party => dispatch => {
  dispatch({
    type: SAVE_PARTY,
    payload: http.post(`/parties`, party)
  });
};

export const getParties = () => dispatch => {
  dispatch({
    type: GET_PARTIES,
    payload: http.get(`/parties`)
  });
};

export const getOneParty = partyId => dispatch => {
  dispatch({
    type: GET_ONE_PARTY,
    payload: http.get(`/parties/${partyId}`)
  });
};
