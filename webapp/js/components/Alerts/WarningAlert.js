import React from 'react';
import Alert from './Alert'

export default class WarningAlert extends React.Component {
  render() {
    return (
      <Alert alertType={"alert-warning"} alertStrongMessages={"Warning: "} alertMessage={this.props.message} onRemove={this.props.onRemove}/>
    )
  }
}
