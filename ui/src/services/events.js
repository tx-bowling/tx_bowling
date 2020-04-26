import BaseService from './base';

class EventsService {
  http;

  constructor() {
    this.http = new BaseService();
  }

  getEvents = () => {
    return this.http.get(`/api/v1/events.json`, {});
  };

  getEvent = (id) => {
    return this.http.get(`/api/v1/events/${id}.json`, {})
  }
}

export default EventsService;
