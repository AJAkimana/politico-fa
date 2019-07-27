import { GET_PARTIES, GET_OFFICES } from '../actions';
import { fulfilled } from '../helpers';

const initialState = {
  offices: [],
  officesFetched: false
};

const reduceOffice = (state = initialState, action) => {
  switch (action.type) {
    case fulfilled(GET_OFFICES):
      return {
        ...state,
        officesFetched: true,
        offices: action.payload.data.data
      };
    default:
      return state;
  }
};

export { reduceOffice };
