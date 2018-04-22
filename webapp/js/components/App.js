import React, { Component } from 'react';
import ComponentWithAlerts from './Alerts/ComponentWithAlerts';
import _ from 'lodash';
import IfElse from './Common/IfElse';
import Login from './Login/Login';
import Home from './Home/Home';

export default class App extends ComponentWithAlerts {
  constructor(props) {
    super(props);
    this.state = {
      authenticated: false
    };
    this.onLoginSuccess = this.onLoginSuccess.bind(this);
  }

  onLoginSuccess() {
    this.setState({
      authenticated: true
    });
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
