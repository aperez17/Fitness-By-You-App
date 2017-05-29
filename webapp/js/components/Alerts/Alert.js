import React from 'react';

export default class Alert extends React.Component {
  render() {
    const classNames = "alert " + this.props.alertType;
    return (
      <div className={classNames} role="alert">
        <strong>{this.props.alertStrongMessages}</strong>
        {this.props.alertMessage}
        <a onClick={this.props.onRemove} style={{float: "right", color: "inherit", cursor: "pointer"}}>
          <span className="glyphicon glyphicon-remove" aria-hidden="true" />
        </a>
      </div>
    );
  }
}
