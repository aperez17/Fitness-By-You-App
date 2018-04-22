import React from 'react';
import SuccessAlert from './SuccessAlert';
import ErrorAlert from './ErrorAlert';
import InfoAlert from './InfoAlert';
import WarningAlert from './WarningAlert';


export default class ComponentWithAlerts extends React.Component {

  constructor(props) {
    super(props);
    this.onRemove = this.onRemove.bind(this);
    this.onSuccessResponse = this.onSuccessResponse.bind(this);
    this.onWarningResponse = this.onWarningResponse.bind(this);
    this.onErrorResponse = this.onErrorResponse.bind(this);
    this.onInfoResponse = this.onInfoResponse.bind(this);
    this.state = {
      alert: '',
    };
    this.alertHandlers = {
      onSuccessResponse: this.onSuccessResponse,
      onWarningResponse: this.onWarningResponse,
      onErrorResponse: this.onErrorResponse,
      onInfoResponse: this.onInfoResponse
    };
  }

  onRemove(e) {
    e.preventDefault();
    this.setState({
      alert:  ''
    })
  }

  onSuccessResponse(resp) {
    this.setState({
      alert: <SuccessAlert message={resp.message} onRemove={this.onRemove.bind(this)} />
    });
  }

  onWarningResponse(resp) {
    this.setState({
      alert: <WarningAlert message={resp.message} onRemove={this.onRemove.bind(this)} />
    });
  }

  onErrorResponse(resp) {
    console.log(resp)
    this.setState({
      alert: <ErrorAlert message={resp.message ? resp.message: resp.responseText } onRemove={this.onRemove.bind(this)} />
    });
  }

  onInfoResponse(resp) {
    this.setState({
      alert: <InfoAlert message={resp.message} onRemove={this.onRemove.bind(this)} />
    });
  }
}
