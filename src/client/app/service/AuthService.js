import axios from 'axios';
import session from 'sessionstorage';

export default class AuthService {

  authSuccess(accessToken) {
    localStorage.setItem('accessToken', accessToken);
  }

  static register(username, password) {
    if (typeof username === 'undefined' ||
      typeof password === 'undefined') {
      throw new TypeError('username and password are required');
    }

    return new Promise((resolve, reject) => {
      axios.post('/api/auth/register', {
        username,
        password,
      }).then(response => {
        const data = response.data;
        console.log(response);
        if (data.success) {
          resolve(true);
        }
        resolve(false)
      })
    })
  }

  static login(username, password) {
    if (typeof username === 'undefined' ||
      typeof password === 'undefined') {
      throw new TypeError('username and password are required');
    }

    return new Promise((resolve, reject) => {
      axios.post('/api/auth/login', {
        username,
        password,
      }).then(response => {
        const data = response.data;
        if (data.success) {
          session.setItem('authorization', data.token);
          resolve(true);
        }
        resolve(false)
      })
    })

  }

  static logout() {

  }

}