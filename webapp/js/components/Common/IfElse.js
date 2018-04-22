import React from 'react';


export default class IfElse extends React.Component {
  render() {
    if (this.props.condition) {
      return this.props.ifChild;
    } else {
      return this.props.elseChild;
    }
  }
}
