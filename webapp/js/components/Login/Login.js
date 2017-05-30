import React from 'react';
import LoginForm from './LoginForm';
import Carousel from '../Common/Carousel';

export default class Login extends React.Component {
  render() {
    return (
      <div className={"login-wrapper"}>
        <Carousel>
          <LoginForm alertHandlers={this.props.alertHandlers}/>
        </Carousel>
      </div>
    );
  }
}
