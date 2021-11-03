import {
  UPDATE_USER,
  UPDATE_TOKEN
} from '../constants/userConstants';
import { fromJS} from 'immutable';

const initialState = {
 userData:{},
 accessToken:""
};

const initialImmutableState = fromJS(initialState);

export default function reducer(state = initialImmutableState, action = {}) {
  switch (action.type) {
    case UPDATE_USER:
      return {
          ...state,
          userData:action.payload
      }
      case UPDATE_TOKEN:
          return {
              ...state,
              accessToken:action.payload
          }
    default:
      return state;
  }
}
