import React from 'react';

export default class Card extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div className="media">
      <div className="media-left">
        <a href="#">
          {this.props.image ? <img className="media-object" style={this.props.image.style} src={this.props.image.url} /> : <div></div>}
        </a>
      </div>
      <div className="media-body">
        <h4 className="media-heading">{this.props.title}</h4>
        <div>{this.props.body}</div>
      </div>
    </div>
    );
  }
}
