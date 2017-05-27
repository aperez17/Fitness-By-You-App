import React from 'react';

export default class LoginForm extends React.Component {
  render() {
    return (
      <div>
        <form>
          <label><b>Username</b></label>
          <input type="text" placeholder="Enter Username" name="uname" required />
          <label><b>Password</b></label>
          <input type="password" placeholder="Enter Password" name="psw" required />

          <button type="submit">Login</button>

          <label>Remember Me</label>
          <input type="checkbox" checked="checked" />
        </form>
      </div>
    );
  }
}
