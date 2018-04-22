import React from 'react';

export default class Dropdown extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {step, iterations, time} = this.props.step;
    return (
      <div className="dropdown">
        <button className="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
          {this.props.title}
          <span className="caret"></span>
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
          {this.children}
        </ul>
      </div>
    );
  }
}
