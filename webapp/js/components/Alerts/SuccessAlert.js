import React from 'react';
import Alert from './Alert'

export default class SuccessAlert extends React.Component {
  render() {
    return (
      <Alert alertType={"alert-success"} alertStrongMessages={"Success: "} alertMessage={this.props.message} onRemove={this.props.onRemove}/>
    )
  }
}
