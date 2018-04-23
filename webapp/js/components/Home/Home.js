import React from 'react';
import WorkoutCard from '../Workout/WorkoutCard';
import ServiceClient from '../../service/ServiceClient';
import NavigationBar from '../Navigation/NavigationBar';


export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      workouts: []
    };
    this.renderWorkout = this.renderWorkout.bind(this);
  }
  componentWillMount() {
    ServiceClient.getAll('/api/workouts').then((data) => {
      this.setState({
        workouts: data
      });
    });
  }

  renderWorkout(workout) {
    return (<WorkoutCard key={workout.workoutId} workout={workout} />);
  }

  render() {
    return (
      <div>
          <div>
            <NavigationBar user={this.props.user} onLogout={this.props.onLogout} />
          </div>
        <ul>
          {this.state.workouts.map(this.renderWorkout)}
        </ul>
      </div>
    );
  }
}
