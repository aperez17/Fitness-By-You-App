import React from 'react';
import _ from 'lodash';
import ServiceClient from '../../service/ServiceClient';

export default class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: null,
      password: null
    };
  }

  onUserNameChanged(e) {
    this.setState({
      username: e.target.value
    });
  }

  onPasswordChanged(e) {
    this.setState({
      password: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();
    const submission = {
      username: this.state.username,
      password: this.state.password
    };
    ServiceClient.post('/api/login/authenticate', submission).then(() =>
      this.props.alertHandlers.success("Logged in")
    ).fail(e => this.props.alertHandlers.error(e));
  }

  render() {
    return (
      <div>
        <form className="form-signin">
          <h2 className="form-signing-header">Login</h2>
          <label htmlFor="username" className="sr-only"><b>Username</b></label>
          <input type="text" id="username" className="form-control" placeholder="Email Address" required autoFocus onChange={this.onUserNameChanged.bind(this)}/>
          <label htmlFor="password"><b>Password</b></label>
          <input type="password" id="password" className="form-control" placeholder="Password" required autoFocus onChange={this.onPasswordChanged.bind(this)} />
          <button className="btn btn-large btn-primary btn-block" type="submit" onClick={this.onSubmit.bind(this)}>Login</button>
        </form>
      </div>
    );
  }
}
