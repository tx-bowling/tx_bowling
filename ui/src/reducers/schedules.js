import {
  GET_SCHEDULES_FAILURE, GET_SCHEDULES_STARTED, GET_SCHEDULES_SUCCESS,
  GET_SCHEDULE_FAILURE, GET_SCHEDULE_STARTED, GET_SCHEDULE_SUCCESS
} from '../actions/schedules';

export default function schedules(state = {}, action) {
  switch (action.type) {
    case GET_SCHEDULES_STARTED:
      return { ...state, loading: true };
    case GET_SCHEDULES_SUCCESS:
      return { ...state, ...action.payload, loading: false, error: null };
    case GET_SCHEDULES_FAILURE:
      return { ...state, loading: false, error: action.payload.errorMessage };
    case GET_SCHEDULE_STARTED:
      return { ...state, loading: true };
    case GET_SCHEDULE_SUCCESS:
      return { ...state, activeSchedule: action.payload, loading: false, error: null };
    case GET_SCHEDULE_FAILURE:
      return { ...state, loading: false, error: action.payload.errorMessage };

    default:
      return state;
  }
}
