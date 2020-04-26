import {
  GET_EVENTS_FAILURE, GET_EVENTS_STARTED, GET_EVENTS_SUCCESS,
  GET_EVENT_FAILURE, GET_EVENT_STARTED, GET_EVENT_SUCCESS
} from '../actions/events';

export default function events(state = {}, action) {
  switch (action.type) {
    case GET_EVENTS_STARTED:
      return { ...state, loading: true };
    case GET_EVENTS_SUCCESS:
      return { ...state, ...action.payload, loading: false, error: null };
    case GET_EVENTS_FAILURE:
      return { ...state, loading: false, error: action.payload.errorMessage };
    case GET_EVENT_STARTED:
      return { ...state, loading: true };
    case GET_EVENT_SUCCESS:
      return { ...state, activeEvent: action.payload, loading: false, error: null };
    case GET_EVENT_FAILURE:
      return { ...state, loading: false, error: action.payload.errorMessage };

    default:
      return state;
  }
}
