import React from 'react';
import _ from 'lodash';
import ServiceClient from '../../service/ServiceClient';
import PrimaryButton from '../Common/PrimaryButton';

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
    ServiceClient.post('/api/login/authenticate', submission)
      .then((data) => {
        this.props.onLoginSuccess(data);
      })
      .fail(this.props.alertHandlers.onErrorResponse);
  }

  render() {
    return (
      <div className="login-form">
        <form className="form-signin">
          <h2 className="form-signing-header">Fitness By You</h2>
          <label htmlFor="username" className="sr-only"><b>Username</b></label>
          <input type="text" id="username" className="form-control" placeholder="Email Address" required autoFocus onChange={this.onUserNameChanged.bind(this)}/>
          <label htmlFor="password"><b>Password</b></label>
          <input type="password" id="password" className="form-control" placeholder="Password" required autoFocus onChange={this.onPasswordChanged.bind(this)} />
          <PrimaryButton buttonType={"submit"} onClick={this.onSubmit.bind(this)} label={"Login"} />
        </form>
      </div>
    );
  }
}
