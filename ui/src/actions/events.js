import EventsService from './../services/events';

// GET EVENTS -----------------------------------------------
export const GET_EVENTS_STARTED = 'GET_EVENTS_STARTED';
export const GET_EVENTS_SUCCESS = 'GET_EVENTS_SUCCESS';
export const GET_EVENTS_FAILURE = 'GET_EVENTS_FAILURE';

const getEventsStarted = () => ({
  type: GET_EVENTS_STARTED,
});

const getEventsSuccess = (eventsData) => {
  let data = {};
  eventsData.events.forEach(event => (data[event.id] = event));

  return {
    type: GET_EVENTS_SUCCESS,
    payload: {
      data: data,
    },
  };
};

export const getEventsFailure = (errorMessage) => ({
  type: GET_EVENTS_FAILURE,
  payload: {
    errorMessage,
  },
});

export const getEvents = () => {
  return (dispatch) => {
    dispatch(getEventsStarted());
    new EventsService()
      .getEvents()
      .then(res => {
        dispatch(getEventsSuccess(res.data));
      })
      .catch(err => {
        dispatch(getEventsFailure(err.message));
      });
  };
};

// GET EVENT -----------------------------------------------
export const GET_EVENT_STARTED = 'GET_EVENT_STARTED';
export const GET_EVENT_SUCCESS = 'GET_EVENT_SUCCESS';
export const GET_EVENT_FAILURE = 'GET_EVENT_FAILURE';

const getEventStarted = () => ({
  type: GET_EVENT_STARTED,
});

const getEventSuccess = (eventData) => {
  return {
    type: GET_EVENT_SUCCESS,
    payload: {
      data: eventData.event,
    },
  };
};

export const getEventFailure = (errorMessage) => ({
  type: GET_EVENT_FAILURE,
  payload: {
    errorMessage,
  },
});

export const getEvent = (id) => {
  return (dispatch) => {
    dispatch(getEventStarted());
    new EventsService()
      .getEvent(id)
      .then(res => {
        const event = res.data.event;
        dispatch(getEventSuccess(event));
      })
      .catch(err => {
        dispatch(getEventFailure(err.message));
      });
  };
};

