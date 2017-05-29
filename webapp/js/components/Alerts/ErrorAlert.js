import React from 'react';
import Alert from './Alert'

export default class ErrorAlert extends React.Component {
  render() {
    return (
      <Alert alertType={"alert-danger"} alertStrongMessages={"Error: "} alertMessage={this.props.message} onRemove={this.props.onRemove}/>
    )
  }
}
