import BaseService from './base';

class AddressesService {
  http;

  constructor() {
    this.http = new BaseService();
  }

  getAddresses = () => {
    return this.http.get(`/api/v1/addresses.json`, {});
  };

  getAddress = (id) => {
    return this.http.get(`/api/v1/addresses/${id}.json`, {})
  };

  createAddress = (data) => {
    return this.http.post(`/api/v1/addresses.json`, data, {})
  };
}

export default AddressesService;
