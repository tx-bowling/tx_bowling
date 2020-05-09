import {GET_AUTH_TOKEN_FAILURE, GET_AUTH_TOKEN_STARTED, GET_AUTH_TOKEN_SUCCESS} from "../actions/auth";

export default function auth(state = {loading: false, errors: null}, action) {
  switch (action.type) {
    case GET_AUTH_TOKEN_STARTED:
      return {...state, loading: true};
    case GET_AUTH_TOKEN_SUCCESS:
      return {...state, loading: false, error: null};
    case GET_AUTH_TOKEN_FAILURE:
      return {...state, loading: false, error: action.payload.errorMessage};
    default:
      return state
  }
}
