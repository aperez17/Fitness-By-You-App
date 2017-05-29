import React from 'react';

export default class Carousel extends React.Component {
  render() {
    return (
      <div style={{ height: '100%', display: 'inline-block'}}>
        <div id="myCarousel" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
            <li data-target="#myCarousel" data-slide-to="1"></li>
            <li data-target="#myCarousel" data-slide-to="2"></li>
          </ol>

          <div className="carousel-inner">
            <div className="item active">
              <img src="http://fitnesstrainingroutine.com/wp-content/uploads/2016/08/sprint-exercise.jpg" alt="Los Angeles" style={{width: '100%'}} />
            </div>

            <div className="item">
              <img src="https://assets.entrepreneur.com/content/3x2/822/20151012194720-woman-exercising-workout.jpeg" alt="Chicago" style={{ width: '100%'}} />
            </div>

            <div className="item">
              <img src="http://www.active.com/Assets/Fitness/2-week-plan.jpg" alt="New york" style={{width: '100%'}} />
            </div>
          </div>

          <a className="left carousel-control" href="#myCarousel" data-slide="prev">
            <span className="glyphicon glyphicon-chevron-left"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="right carousel-control" href="#myCarousel" data-slide="next">
            <span className="glyphicon glyphicon-chevron-right"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    );
  }
}
