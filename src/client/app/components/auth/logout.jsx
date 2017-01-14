import React, { Component } from 'react';
import AuthService from '../../service/AuthService';

class Logout extends Component {

  componentDidMount() {
    AuthService.logout();
  }

  render() {
    return <p>You are now logged out</p>
  }

};


export default Logout;