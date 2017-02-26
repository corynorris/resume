import React from 'react';
import { IndexRoute, Route } from 'react-router'

import App from './components/app.jsx'
import AuthLayout from './components/auth/layout.jsx';
import LoginForm from './components/auth/loginForm.jsx';
import RegistrationForm from './components/auth/registrationForm.jsx';
import Logout from './components/auth/logout.jsx';
import Dashboard from './components/dashboard.jsx';
import Edit from './components/resume/edit.jsx';
import ResumeLayout from './components/resume/layout.jsx';

module.exports = (
  <Route path="/" component={App}>
    <Route component={AuthLayout}>
      <Route path="login" component={LoginForm} />
      <Route path="register" component={RegistrationForm} />
      <Route path="logout" component={Logout} />
    </Route>
    <Route component={ResumeLayout}>
      <Route path="edit" component={Edit} />
    </Route>
    <IndexRoute component={Dashboard} />
  </Route>
)