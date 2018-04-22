import React from 'react';
import WorkoutCardStep from './WorkoutCardStep';

export default class WorkoutCardBody extends React.Component {
  constructor(props) {
    super(props);
    this.renderStep = this.renderStep.bind(this);
  }

  renderStep(step, index) {
      return <WorkoutCardStep key={step.step + "-" + index} step={step} />;
  }

  render() {
    const {steps} = this.props;
    return (
      <ul className="list-group">
        {steps.map(this.renderStep)}
      </ul>
    )
  }
}
