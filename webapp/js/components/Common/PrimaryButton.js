import React from 'react';

export default class PrimaryButton extends React.Component {
  render() {
    return (
      <button className="btn btn-large btn-primary btn-block" type={this.props.buttonType} onClick={this.props.onClick}>{this.props.label}</button>
    );
  }
}
