import SchedulesService from './../services/schedules';

// GET SCHEDULES -----------------------------------------------
export const GET_SCHEDULES_STARTED = 'GET_SCHEDULES_STARTED';
export const GET_SCHEDULES_SUCCESS = 'GET_SCHEDULES_SUCCESS';
export const GET_SCHEDULES_FAILURE = 'GET_SCHEDULES_FAILURE';

const getSchedulesStarted = () => ({
  type: GET_SCHEDULES_STARTED,
});

const getSchedulesSuccess = (schedulesData) => {
  let data = {};
  schedulesData.schedules.forEach(schedule => (data[schedule.id] = schedule));

  return {
    type: GET_SCHEDULES_SUCCESS,
    payload: {
      data: data,
    },
  };
};

export const getSchedulesFailure = (errorMessage) => ({
  type: GET_SCHEDULES_FAILURE,
  payload: {
    errorMessage,
  },
});

export const getSchedules = () => {
  return (dispatch) => {
    dispatch(getSchedulesStarted());
    new SchedulesService()
      .getSchedules()
      .then(res => {
        dispatch(getSchedulesSuccess(res.data));
      })
      .catch(err => {
        dispatch(getSchedulesFailure(err.message));
      });
  };
};

// GET SCHEDULE -----------------------------------------------
export const GET_SCHEDULE_STARTED = 'GET_SCHEDULE_STARTED';
export const GET_SCHEDULE_SUCCESS = 'GET_SCHEDULE_SUCCESS';
export const GET_SCHEDULE_FAILURE = 'GET_SCHEDULE_FAILURE';

const getScheduleStarted = () => ({
  type: GET_SCHEDULE_STARTED,
});

const getScheduleSuccess = (scheduleData) => {
  return {
    type: GET_SCHEDULE_SUCCESS,
    payload: {
      data: scheduleData.schedule,
    },
  };
};

export const getScheduleFailure = (errorMessage) => ({
  type: GET_SCHEDULE_FAILURE,
  payload: {
    errorMessage,
  },
});

export const getSchedule = (id) => {
  return (dispatch) => {
    dispatch(getScheduleStarted());
    new SchedulesService()
      .getSchedule(id)
      .then(res => {
        const schedule = res.data.schedule;
        dispatch(getScheduleSuccess(schedule));
      })
      .catch(err => {
        dispatch(getScheduleFailure(err.message));
      });
  };
};

