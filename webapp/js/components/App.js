import React from 'react';
import Login from './Login/Login';
import SuccessAlert from './Alerts/SuccessAlert';
import ErrorAlert from './Alerts/ErrorAlert';
import InfoAlert from './Alerts/InfoAlert';
import WarningAlert from './Alerts/WarningAlert';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      alert: undefined
    };
  }

  onSuccessResponse(message) {
    this.setState({
      alert: <SuccessAlert alertMessage={message} onRemove={this.onRemoveAlert.bind(this)}/>
    });
  }

  onWarningResponse(message) {
    this.setState({
      alert: <WarningAlert alertMessage={message} onRemove={this.onRemoveAlert.bind(this)}/>
    });
  }

  onInfoResponse(message) {
    this.setState({
      alert: <InfoAlert alertMessage={message} onRemove={this.onRemoveAlert.bind(this)}/>
    });
  }

  onErrorResponse(e) {
    const message = e.responseJSON.message;
    this.setState({
      alert: <ErrorAlert message={message} onRemove={this.onRemoveAlert.bind(this)}/>
    });
  }

  onRemoveAlert(e) {
    this.setState({
      alert: undefined
    });
  }

  render() {
    const alertHandlers = {
      success: this.onSuccessResponse.bind(this),
      error: this.onErrorResponse.bind(this),
      warning: this.onWarningResponse.bind(this),
      info: this.onInfoResponse.bind(this)
    }
    return (
      <div>
        {this.state.alert}
        <Login alertHandlers={alertHandlers}/>
      </div>
    );
  }
}
