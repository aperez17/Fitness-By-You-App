import React from 'react';

export default class DropdownMenuItem extends React.Component {
  constructor(props) {
    super(props);
    this.onDropdownMenuItemClick = this.onDropdownMenuItemClick.bind(this);
  }

  onDropdownMenuItemClick(e) {
    e.preventDefault();
    this.props.onItemClick();
  }

  render() {
    return (
      <li key={this.props.title}><a href="#" onClick={this.onDropdownMenuItemClick}>{this.props.title}</a></li>
    );
  }
}
