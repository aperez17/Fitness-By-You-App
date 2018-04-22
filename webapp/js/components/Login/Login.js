import React from 'react';
import LoginForm from './LoginForm';
import Carousel from '../Common/Carousel';
import ComponentWithAlerts from '../Alerts/ComponentWithAlerts';

export default class Login extends ComponentWithAlerts {
  constructor(props) {
    super(props);
    this.onLoginSuccess = this.onLoginSuccess.bind(this);
  }

  onLoginSuccess(data) {
    this.props.onLoginSuccess(data);
  }

  render() {
    return (
      <div className={"login-wrapper"}>
        <Carousel>
          <LoginForm onLoginSuccess={this.onLoginSuccess} alertHandlers={this.props.alertHandlers} />
        </Carousel>
      </div>
    );
  }
}
