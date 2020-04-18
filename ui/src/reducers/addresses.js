import {
  GET_ADDRESSES_FAILURE, GET_ADDRESSES_STARTED, GET_ADDRESSES_SUCCESS,
  GET_ADDRESS_FAILURE, GET_ADDRESS_STARTED, GET_ADDRESS_SUCCESS} from '../actions/addresses';

export default function addresses(state = {}, action) {
  switch (action.type) {
    case GET_ADDRESSES_STARTED:
      return { ...state, loading: true };
    case GET_ADDRESSES_SUCCESS:
      return { ...state, ...action.payload, loading: false, error: null };
    case GET_ADDRESSES_FAILURE:
      return { ...state, loading: false, error: action.payload.errorMessage };
    case GET_ADDRESS_STARTED:
      return { ...state, loading: true };
    case GET_ADDRESS_SUCCESS:
      return { ...state, activeAddress: action.payload.address, loading: false, error: null };
    case GET_ADDRESS_FAILURE:
      return { ...state, loading: false, error: action.payload.errorMessage };

    default:
      return state;
  }
}
