import React, { Component } from 'react';
import { Link } from 'react-router'

class Dashboard extends Component {
  render() {
    return (
      <div>
        Hello World
         <ul role="nav">
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/logout">Logout</Link></li>
        </ul>
      </div>
    );
  }
}

export default Dashboard;