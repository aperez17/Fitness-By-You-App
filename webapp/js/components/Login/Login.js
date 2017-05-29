import React from 'react';
import LoginForm from './LoginForm';
import Carousel from '../Common/Carousel';

export default class Login extends React.Component {
  render() {
    return (
      <div>
        <h1>Fitness By You</h1>
        <Carousel />
        <LoginForm alertHandlers={this.props.alertHandlers}/>
      </div>
    );
  }
}
