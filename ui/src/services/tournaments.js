import BaseService from './base';

class TournamentsService {
    http;

    constructor() {
        this.http = new BaseService();
    }

    getTournaments = () => {
        return this.http.get(`/api/v1/tournaments.json`, {});
    };

    getTournament = (id) => {
        return this.http.get(`/api/v1/tournaments/${id}.json`, {});
    };

    getTournamentLocation = (id) => {
        return this.http.get(`/api/v1/tournaments/${id}/location.json`, {});
    };

    getTournamentSchedules = (id) => {
        return this.http.get(`/api/v1/tournaments/${id}/schedules.json`, {});
    };
}

export default TournamentsService;
