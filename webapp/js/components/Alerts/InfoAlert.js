import React from 'react';
import Alert from './Alert'

export default class InfoAlert extends React.Component {
  render() {
    return (
      <Alert alertType={"alert-info"} alertStrongMessages={"Info: "} alertMessage={this.props.message} onRemove={this.props.onRemove}/>
    )
  }
}
