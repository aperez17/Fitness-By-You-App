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
      authenticated: null
    };
    this.onLoginSuccess = this.onLoginSuccess.bind(this);
    this.isAuthenticated = this.isAuthenticated.bind(this);
  }

  onLoginSuccess() {
    this.setState({
      authenticated: true
    });
  }

  componentWillMount() {
    this.isAuthenticated();
  }

  isAuthenticated() {
    if (_.isNil(this.state.authenticated)) {
        ServiceClient.get("/api/login").then(() => {
            this.setState({
                authenticated: true
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
            <Home />
          }
          elseChild={
            <Login alertHandlers={this.alertHandlers} onLoginSuccess={this.onLoginSuccess}/>
          }
        />
      </div>
    );
  }
}
