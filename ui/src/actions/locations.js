import LocationsService from './../services/locations';

// GET LOCATIONS -----------------------------------------------
export const GET_LOCATIONS_STARTED = 'GET_LOCATIONS_STARTED';
export const GET_LOCATIONS_SUCCESS = 'GET_LOCATIONS_SUCCESS';
export const GET_LOCATIONS_FAILURE = 'GET_LOCATIONS_FAILURE';

const getLocationsStarted = () => ({
  type: GET_LOCATIONS_STARTED,
});

const getLocationsSuccess = (locationsData) => {
  let data = {};
  locationsData.locations.forEach(location => (data[location.id] = location));

  return {
    type: GET_LOCATIONS_SUCCESS,
    payload: {
      data: data,
    },
  };
};

export const getLocationsFailure = (errorMessage) => ({
  type: GET_LOCATIONS_FAILURE,
  payload: {
    errorMessage,
  },
});

export const getLocations = () => {
  return (dispatch) => {
    dispatch(getLocationsStarted());
    new LocationsService()
      .getLocations()
      .then(res => {
        dispatch(getLocationsSuccess(res.data));
      })
      .catch(err => {
        dispatch(getLocationsFailure(err.message));
      });
  };
};

// GET LOCATION -----------------------------------------------
export const GET_LOCATION_STARTED = 'GET_LOCATION_STARTED';
export const GET_LOCATION_SUCCESS = 'GET_LOCATION_SUCCESS';
export const GET_LOCATION_FAILURE = 'GET_LOCATION_FAILURE';

const getLocationStarted = () => ({
  type: GET_LOCATION_STARTED,
});

const getLocationSuccess = (locationData) => {
  return {
    type: GET_LOCATION_SUCCESS,
    payload: {
      activeLocation: locationData,
    },
  };
};

export const getLocationFailure = (errorMessage) => ({
  type: GET_LOCATION_FAILURE,
  payload: {
    errorMessage,
  },
});

export const getLocation = (id) => {
  return (dispatch) => {
    dispatch(getLocationStarted());
    new LocationsService()
      .getLocation(id)
      .then(res => {
        const location = res.data.location;
        dispatch(getLocationSuccess(location));
      })
      .catch(err => {
        dispatch(getLocationFailure(err.message));
      });
  };
};
