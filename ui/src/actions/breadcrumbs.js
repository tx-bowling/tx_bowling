export const SET_BREADCRUMBS_SUCCESS = 'SET_BREADCRUMBS_SUCCESS';

export const setBreadcrumbs = (breadcrumbs) => {
  return {
    type: SET_BREADCRUMBS_SUCCESS,
    payload: {
      breadcrumbs: breadcrumbs
    }
  }
};
