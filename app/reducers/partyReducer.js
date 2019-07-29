import { GET_PARTIES } from '../actions';
import { fulfilled } from '../helpers';

const initialState = {
  parties: [],
  partiesFetched: false
};

const reduceParty = (state = initialState, action) => {
  switch (action.type) {
    case fulfilled(GET_PARTIES):
      return {
        ...state,
        partiesFetched: true,
        parties: action.payload.data.data
      };
    default:
      return state;
  }
};

export { reduceParty };
