import BaseService from './base';
import Cookie from 'js-cookie';

class AuthService {
  http;

  constructor() {
    this.http = new BaseService();
  }

  login = (email, password) => {
    return this.http.post('/api/v1/user_token.json', { auth: { email: email, password: password } }, {});
  };

  logout = () => {
    Cookie.remove('txb_jwt')
  };
}

export default AuthService;
