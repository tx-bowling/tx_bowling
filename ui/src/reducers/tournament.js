import {
  GET_TOURNAMENT_FAILURE, GET_TOURNAMENT_STARTED, GET_TOURNAMENT_SUCCESS,
  GET_TOURNAMENT_LOCATION_FAILURE, GET_TOURNAMENT_LOCATION_STARTED, GET_TOURNAMENT_LOCATION_SUCCESS,
  GET_TOURNAMENT_SCHEDULES_FAILURE, GET_TOURNAMENT_SCHEDULES_STARTED, GET_TOURNAMENT_SCHEDULES_SUCCESS
} from '../actions/tournament';

export default function tournaments(state = {}, action) {
  switch (action.type) {
    case GET_TOURNAMENT_STARTED:
      return { ...state, loading: true };
    case GET_TOURNAMENT_SUCCESS:
      return { ...state, ...action.payload, loading: false, error: null };
    case GET_TOURNAMENT_FAILURE:
      return { ...state, loading: false, error: action.payload.errorMessage };
    case GET_TOURNAMENT_LOCATION_STARTED:
      return { ...state, loading: true, error: null };
    case GET_TOURNAMENT_LOCATION_SUCCESS:
      return {
        ...state,
        data: {...state.data, location: action.payload.data},
        loading: false,
        error: null
      };
    case GET_TOURNAMENT_LOCATION_FAILURE:
      return { ...state, loading: true, error: null };
    case GET_TOURNAMENT_SCHEDULES_STARTED:
      return { ...state, loading: true, error: null };
    case GET_TOURNAMENT_SCHEDULES_SUCCESS:
      return {
        ...state,
        data: {...state.data, schedules: action.payload.data},
        loading: false,
        error: null
      };
    case GET_TOURNAMENT_SCHEDULES_FAILURE:
      return { ...state, loading: true, error: null };

    default:
      return state;
  }
}
