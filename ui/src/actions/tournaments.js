import TournamentsService from './../services/tournaments';

// GET TOURNAMENTS ----------------------------------------------
export const GET_TOURNAMENTS_STARTED = 'GET_TOURNAMENTS_STARTED';
export const GET_TOURNAMENTS_SUCCESS = 'GET_TOURNAMENTS_SUCCESS';
export const GET_TOURNAMENTS_FAILURE = 'GET_TOURNAMENTS_FAILURE';

const getTournamentsStarted = () => ({
  type: GET_TOURNAMENTS_STARTED,
});

const getTournamentsSuccess = (tournamentsData) => {
  let data = {};
  tournamentsData.tournaments.forEach(tournament => (data[tournament.id] = tournament));

  return {
    type: GET_TOURNAMENTS_SUCCESS,
    payload: {
      data: data,
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
