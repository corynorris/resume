import React from 'react';
import { IndexRoute, Route } from 'react-router'

import App from './components/app.jsx'
import AuthLayout from './components/auth/layout.jsx';
import LoginForm from './components/auth/loginForm.jsx';
import Logout from './components/auth/logout.jsx';
import Dashboard from './components/dashboard.jsx';

module.exports = (
  <Route path="/" component={App}>
    <Route component={AuthLayout}>
      <Route path="login" component={LoginForm} />
      <Route path="logout" component={Logout} />
    </Route>
    <IndexRoute component={Dashboard} />
  </Route>
)