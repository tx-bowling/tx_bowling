import BaseService from './base';

class LocationsService {
  http;

  constructor() {
    this.http = new BaseService();
  }

  getLocations = () => {
    return this.http.get(`/locations.json`, {});
  };

  getLocation = (id) => {
    return this.http.get(`/locations/${id}.json`, {})
  }
}

export default LocationsService;
