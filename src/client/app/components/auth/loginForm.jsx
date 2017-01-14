import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import isEmail from 'validator/lib/isEmail';
import isLength from 'validator/lib/isLength';
import AuthService from '../../service/AuthService';

class LoginForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      errors: {
        email: '',
        password: '',
      },
      disabled: false,
    }
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.validate = this.validate.bind(this);
    this.validateEmail = this.validateEmail.bind(this);
    this.validatePassword = this.validatePassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  validate() {
    const isValid = this.state.email.length > 0
      && this.state.errors.email.length === 0
      && this.state.password.length > 0
      && this.state.errors.password.length === 0;

    this.setState({ isValid })
  }
  validateEmail() {
    const errors = this.state.errors;
    errors.email = '';
    if (!isEmail(this.state.email)) {
      errors.email = 'Not a valid email';
    };
    this.setState({ errors: errors }, this.validate);
  }

  validatePassword() {
    const errors = this.state.errors;
    errors.password = '';
    if (!isLength(this.state.password, { min: 1 })) {
      errors.password = 'Password field can\'t be empty';
    };
    this.setState({ errors: errors }, this.validate);
  }

  handleEmailChange(event) {
    this.setState({ email: event.target.value }, this.validateEmail);
  }

  handlePasswordChange(event) {
    this.setState({ password: event.target.value }, this.validatePassword);
  }


  handleSubmit(event) {
    event.preventDefault();
    if (!this.state.isValid) return;
    const { email, password } = this.state;

    this.setState({ disabled: true })
    AuthService.authenticate({
      email,
      password
    }).then(success => {
      alert('success: ' + success);
      // enable the form
      this.setState({ disabled: false })
    })
  }

  render() {
    return (
      <form>
        <TextField
          value={this.state.email}
          onChange={this.handleEmailChange}
          disabled={this.state.disabled}
          errorText={this.state.errors.email}
          floatingLabelText="Email"
          fullWidth={true}
          /><br />
        <TextField
          value={this.state.password}
          onChange={this.handlePasswordChange}
          errorText={this.state.errors.password}
          disabled={this.state.disabled}
          floatingLabelText="Password"
          type="password"
          fullWidth={true}
          /><br />
        <RaisedButton
          onClick={this.handleSubmit}
          disabled={this.state.disabled || !this.state.isValid}
          label="Submit"
          primary={true}
          fullWidth={true}
          />
      </form>
    );
  };
};


export default LoginForm;