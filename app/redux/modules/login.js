import { Map, fromJS } from 'immutable';
import { INIT } from '../constants/reduxFormConstants';


let email = 'johndoe@mail.com'
let password = '12345678'
let remember = false

if (localStorage.getItem("remember")) {
  email = localStorage.getItem('email')
  password = localStorage.getItem('password')
  remember = localStorage.getItem('remember')
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
