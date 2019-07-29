import { combineReducers } from 'redux';
import testReducer from './testReducer';
import authReducer from './authReducer';
import { reduceParty } from './partyReducer';
import { reduceOffice } from './officeReducer';

export const reducers = combineReducers({
  test: testReducer,
  auth: authReducer,
  party: reduceParty,
  office: reduceOffice
});
