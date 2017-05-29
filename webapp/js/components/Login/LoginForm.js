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
    ServiceClient.post('/api/login/authenticate', submission).then(() => alert('logged in!!')).fail(() => alert('failed to log in'));
  }

  render() {
    return (
      <div>
        <form>
          <label><b>Username</b></label>
          <input type="text" placeholder="Enter Username" name="uname" required onChange={this.onUserNameChanged.bind(this)}/>
          <label><b>Password</b></label>
          <input type="password" placeholder="Enter Password" name="psw" required onChange={this.onPasswordChanged.bind(this)} />

          <button type="submit" onClick={this.onSubmit.bind(this)}>Login</button>

          <label>Remember Me</label>
          <input type="checkbox" checked="checked" />
        </form>
      </div>
    );
  }
}
