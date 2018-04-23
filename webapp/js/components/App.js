import React, { Component } from 'react';
import ComponentWithAlerts from './Alerts/ComponentWithAlerts';
import _ from 'lodash';
import IfElse from './Common/IfElse';
import Login from './Login/Login';
import Home from './Home/Home';
import ServiceClient from '../service/ServiceClient';

export default class App extends ComponentWithAlerts {
  constructor(props) {
    super(props);
    this.state = {
      authenticated: null,
      user: null
    };
    this.onLoginSuccess = this.onLoginSuccess.bind(this);
    this.onLogout = this.onLogout.bind(this);
    this.isAuthenticated = this.isAuthenticated.bind(this);
  }

  onLoginSuccess(user) {
    this.setState({
      authenticated: true,
      user: user
    });
  }

  onLogout() {
    const self = this;
    return ServiceClient.get("/api/login/logout").then(() => {
        self.setState({
          authenticated: false,
          user: null
      });
        self.onSuccessResponse({ message: "Successfully Logged out" });
    });
  }

  componentWillMount() {
    this.isAuthenticated();
  }

  isAuthenticated() {
    if (_.isNil(this.state.authenticated)) {
        ServiceClient.get("/api/login").then(user => {
            this.setState({
                authenticated: true,
                user: user
            })
        }).fail((err) => {
            this.setState({
                authenticated: false
            })
        })
    }
  }

  render() {
    return (
      <div>
        {this.state.alert}
        <IfElse condition={this.state.authenticated}
          ifChild={
            <Home user={this.state.user} onLogout={this.onLogout} />
          }
          elseChild={
            <Login alertHandlers={this.alertHandlers} onLoginSuccess={this.onLoginSuccess}/>
          }
        />
      </div>
    );
  }
}
