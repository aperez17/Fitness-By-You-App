import React from 'react';

export default class WorkoutCardStep extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {step, iterations, time} = this.props.step;
    return (
      <li className="list-group-item">
        <span className="badge">{iterations} Reps</span>
        <div>{step}</div>
        <div>{time} Minutes</div>
      </li>
    );
  }
}
