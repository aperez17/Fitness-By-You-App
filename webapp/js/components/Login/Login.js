import React from 'react';
import LoginForm from './LoginForm';

export default class Login extends React.Component {
  render() {
    return (
      <div className="container">
        <LoginForm alertHandlers={this.props.alertHandlers}/>
      </div>
    );
  }
}
