import React from 'react';
import Card from '../Common/Card';
import WorkoutCardBody from './WorkoutCardBody';

export default class WorkoutCard extends React.Component {
  constructor(props) {
    super(props);
    this.renderBody = this.renderBody.bind(this);
  }
  renderBody(steps) {
    return <WorkoutCardBody steps={steps} />;
  }
  render() {
    const { name, imageURL, steps, totalTime } = this.props.workout;
    let imageObj;
    if (imageURL) {
      imageObj = {
        style: {
          height: 100,
          width: 200
        },
        url: imageURL
      };
    }
    return (
      <li><Card title={name} image={imageObj} body={this.renderBody(steps)} /></li>
    );
  }
}
