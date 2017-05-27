import React from 'react';
import LoginForm from './LoginForm';

export default class Login extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <h3>Login</h3>
            <hr />
          </div>
        </div>
          <LoginForm />
      </div>
    );
  }
}
