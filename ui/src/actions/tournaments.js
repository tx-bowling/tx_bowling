import TournamentsService from './../services/tournaments';

// GET TOURNAMENTS
export const GET_TOURNAMENTS_STARTED = 'GET_TOURNAMENTS_STARTED';
export const GET_TOURNAMENTS_SUCCESS = 'GET_TOURNAMENTS_SUCCESS';
export const GET_TOURNAMENTS_FAILURE = 'GET_TOURNAMENTS_FAILURE';

const getTournamentsStarted = () => ({
  type: GET_TOURNAMENTS_STARTED,
});

const getTournamentsSuccess = (tournamentsData) => {
  debugger

  let data = {};
  tournamentsData.tournaments.forEach(tournament => (data[tournament.id] = tournament));

  return {
    type: GET_TOURNAMENTS_SUCCESS,
    payload: {
      tournaments: data,
    },
  };
};

export const getTournamentsFailure = (errorMessage) => ({
  type: GET_TOURNAMENTS_FAILURE,
  payload: {
    errorMessage,
  },
});

export const getTournaments = () => {
  return (dispatch) => {
    dispatch(getTournamentsStarted());
    new TournamentsService()
      .getTournaments()
      .then(res => {
        dispatch(getTournamentsSuccess(res.data));
      })
      .catch(err => {
        dispatch(getTournamentsFailure(err.message));
      });
  };
};

// GET TOURNAMENT
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
      activeTournament: tournamentData.tournament,
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
        dispatch(getTournamentSuccess(res.data));
      })
      .catch(err => {
        dispatch(getTournamentFailure(err.message));
      });
  };
};