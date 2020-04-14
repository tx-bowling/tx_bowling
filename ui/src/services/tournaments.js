import BaseService from './base';

class TournamentsService {
    http;

    constructor() {
        this.http = new BaseService();
    }

    getTournaments = () => {
        return this.http.get(`/tournaments.json`, {});
    };

    getTournament = (id) => {
        return this.http.get(`/tournaments/${id}.json`, {});
    };

}

export default TournamentsService;
