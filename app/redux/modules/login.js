import { Map, fromJS } from 'immutable';
import Constants from '../../constants/contants';
import { INIT } from '../constants/reduxFormConstants';


let email = 'johndoe@mail.com'
let password = '12345678'
let remember = false

if (localStorage.getItem(Constants.remember)) {
  email = localStorage.getItem(Constants.email)
  password = localStorage.getItem(Constants.password)
  remember = localStorage.getItem(Constants.remember)
}

const initialState = {
  usersLogin: Map({
    // email: 'johndoe@mail.com',
    // password: '12345678', 
    email,
    password,
    remember,
  })
};
const initialImmutableState = fromJS(initialState);
export default function reducer(state = initialImmutableState, action = {}) {
  switch (action.type) {
    case INIT:
      return state;
    default:
      return state;
  }
}
