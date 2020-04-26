import BaseService from './base';

class SchedulesService {
  http;

  constructor() {
    this.http = new BaseService();
  }

  getSchedules = () => {
    return this.http.get(`/api/v1/schedules.json`, {});
  };

  getSchedule = (id) => {
    return this.http.get(`/api/v1/schedules/${id}.json`, {})
  }
}

export default SchedulesService;
