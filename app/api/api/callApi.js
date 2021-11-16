import { callPost } from './post';

export async function registerUser(data) {
  return callPost('auth/signup', data);
}
export async function loginUser(data) {
  return callPost('auth/signin', data);
}
export async function getUserByParams(data) {
  return callPost('profile/searchUsersByParams', {
    searchData: data,
  });
}
