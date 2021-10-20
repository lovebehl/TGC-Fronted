/* eslint-disable */

import React from 'react';
import Loading from 'dan-components/Loading';
import loadable from '../utils/loadable';

export const BlankPage = loadable(() =>
  import('./Pages/BlankPage'), {
  fallback: <Loading />,
});
export const Login = loadable(() =>
  import('./Pages/Users/Login'), {
  fallback: <Loading />,
});

export const Register = loadable(() =>
  import('./Pages/Users/Register'), {
  fallback: <Loading />,
});
export const ResetPassword = loadable(() =>
  import('./Pages/Users/ResetPassword'), {
  fallback: <Loading />,
});
