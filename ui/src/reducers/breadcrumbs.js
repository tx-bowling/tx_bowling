import { SET_BREADCRUMBS_SUCCESS } from '../actions/breadcrumbs';

export default function locations(state = [], action) {
  switch (action.type) {
    case SET_BREADCRUMBS_SUCCESS:
      return { ...state, ...action.payload };
    default:
      return state;
  }
}
