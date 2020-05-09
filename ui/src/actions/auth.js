import AuthService from './../services/auth';
import Cookies from 'js-cookie'

// GET AUTH TOKEN -----------------------------------------------
export const GET_AUTH_TOKEN_STARTED = 'GET_AUTH_TOKEN_STARTED';
export const GET_AUTH_TOKEN_SUCCESS = 'GET_AUTH_TOKEN_SUCCESS';
export const GET_AUTH_TOKEN_FAILURE = 'GET_AUTH_TOKEN_FAILURE';

const getAuthTokenStarted = () => ({
  type: GET_AUTH_TOKEN_STARTED,
});

const getAuthTokenSuccess = (authTokenData) => {
  debugger
  Cookies.set('txb_jwt', authTokenData.jwt);
  return {
    type: GET_AUTH_TOKEN_SUCCESS
  }
};

export const getAuthTokenFailure = (errorMessage) => ({
  type: GET_AUTH_TOKEN_FAILURE,
  payload: {
    errorMessage,
  },
});

export const getAuthToken = (email, password) => {
  return (dispatch) => {
    dispatch(getAuthTokenStarted());
    new AuthService()
      .login(email, password)
      .then(res => {
        dispatch(getAuthTokenSuccess(res.data));
      })
      .catch(err => {
        dispatch(getAuthTokenFailure(err.message));
      });
  };
};
