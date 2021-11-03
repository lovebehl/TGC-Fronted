import * as types from '../constants/userConstants';

export const updateUserAction = userData => ({
  type: types.UPDATE_USER,
  payload:userData
});
export const updateToken = token => ({
    type: types.UPDATE_TOKEN,
    payload:token
  });
