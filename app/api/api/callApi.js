import { callPost } from './post';
import EndUrls from './endUrls';

export async function registerUser(data) {
  return callPost(EndUrls.signUp, data);
}
export async function loginUser(data) {
  return callPost(EndUrls.signIn, data);
}
export async function getUserByParams(data) {
  return callPost(EndUrls.profileUsers, {
    searchData: data,
  });
}
