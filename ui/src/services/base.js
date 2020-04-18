import axios from 'axios';

class BaseService {
  http;

  constructor() {
    this.http = axios.create({});
  };

  get = (path, config) => {
    config = this.spread(config || {});
    return this.http.get(this.fullPath(path), config);
  };

  put = (path, data, config) => {
    return this.http.put(this.fullPath(path), data, config);
  };

  post = (path, data, config) => {
    config = this.spread(config || {});
    return this.http.post(this.fullPath(path), data, config);
  };

  delete = (path, config) => {
    return this.http.delete(this.fullPath(path), config);
  };

  fullPath = (path) => {
    return `${process.env.REACT_APP_API_URL}${path}`;
  };

  spread = (config) => {
    config['headers'] = { ...config['headers'], 'Content-Type': 'application/json' };
    config['headers'] = { ...config['headers'], 'accept': 'application/json' };

    return config;
  };
}

export default BaseService;
