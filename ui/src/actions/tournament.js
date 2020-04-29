import TournamentsService from './../services/tournaments';

// GET TOURNAMENT -----------------------------------------------
export const GET_TOURNAMENT_STARTED = 'GET_TOURNAMENT_STARTED';
export const GET_TOURNAMENT_SUCCESS = 'GET_TOURNAMENT_SUCCESS';
export const GET_TOURNAMENT_FAILURE = 'GET_TOURNAMENT_FAILURE';

const getTournamentStarted = () => ({
  type: GET_TOURNAMENT_STARTED,
});

const getTournamentSuccess = (tournamentData) => {
  return {
    type: GET_TOURNAMENT_SUCCESS,
    payload: {
      data: tournamentData.tournament,
    },
  };
};

export const getTournamentFailure = (errorMessage) => ({
  type: GET_TOURNAMENT_FAILURE,
  payload: {
    errorMessage,
  },
});

export const getTournament = (id) => {
  return (dispatch) => {
    dispatch(getTournamentStarted());
    new TournamentsService()
      .getTournament(id)
      .then(res => {
        const tournament = res.data;
        dispatch(getTournamentSuccess(tournament));
      })
      .catch(err => {
        dispatch(getTournamentFailure(err.message));
      });
  };
};

// GET TOURNAMENT LOCATION -----------------------------------------------
export const GET_TOURNAMENT_LOCATION_STARTED = 'GET_TOURNAMENT_LOCATION_STARTED';
export const GET_TOURNAMENT_LOCATION_SUCCESS = 'GET_TOURNAMENT_LOCATION_SUCCESS';
export const GET_TOURNAMENT_LOCATION_FAILURE = 'GET_TOURNAMENT_LOCATION_FAILURE';

const getTournamentLocationStarted = () => ({
  type: GET_TOURNAMENT_LOCATION_STARTED,
});

const getTournamentLocationSuccess = (locationData) => {
  return {
    type: GET_TOURNAMENT_LOCATION_SUCCESS,
    payload: {
      data: locationData,
    },
  };
};

export const getTournamentLocationFailure = (errorMessage) => ({
  type: GET_TOURNAMENT_LOCATION_FAILURE,
  payload: {
    errorMessage,
  },
});

export const getTournamentLocation = (tournamentId) => {
  return (dispatch) => {
    dispatch(getTournamentLocationStarted());
    new TournamentsService()
      .getTournamentLocation(tournamentId)
      .then(res => {
        const location = res.data.location;
        dispatch(getTournamentLocationSuccess(location));
      })
      .catch(err => {
        dispatch(getTournamentLocationFailure(err.message));
      });
  };
};

// GET TOURNAMENT SCHEDULES -----------------------------------------------
export const GET_TOURNAMENT_SCHEDULES_STARTED = 'GET_TOURNAMENT_SCHEDULES_STARTED';
export const GET_TOURNAMENT_SCHEDULES_SUCCESS = 'GET_TOURNAMENT_SCHEDULES_SUCCESS';
export const GET_TOURNAMENT_SCHEDULES_FAILURE = 'GET_TOURNAMENT_SCHEDULES_FAILURE';

const getTournamentSchedulesStarted = () => ({
  type: GET_TOURNAMENT_SCHEDULES_STARTED,
});

const getTournamentSchedulesSuccess = (schedulesData) => {
  return {
    type: GET_TOURNAMENT_SCHEDULES_SUCCESS,
    payload: {
      data: schedulesData,
    },
  };
};

export const getTournamentSchedulesFailure = (errorMessage) => ({
  type: GET_TOURNAMENT_SCHEDULES_FAILURE,
  payload: {
    errorMessage,
  },
});

export const getTournamentSchedules = (tournamentId) => {
  return (dispatch) => {
    dispatch(getTournamentSchedulesStarted());
    new TournamentsService()
      .getTournamentSchedules(tournamentId)
      .then(res => {
        const schedules = res.data.schedules;
        dispatch(getTournamentSchedulesSuccess(schedules));
      })
      .catch(err => {
        dispatch(getTournamentSchedulesFailure(err.message));
      });
  };
};
