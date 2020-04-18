import BaseService from './base';

class LocationsService {
  http;

  constructor() {
    this.http = new BaseService();
  }

  getLocations = () => {
    return this.http.get(`/api/v1/locations.json`, {});
  };

  getLocation = (id) => {
    return this.http.get(`/api/v1/locations/${id}.json`, {})
  }
}

export default LocationsService;
