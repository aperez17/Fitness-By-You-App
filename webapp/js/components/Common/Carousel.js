import React from 'react';

export default class Carousel extends React.Component {
  render() {
    return (
      // <div>
      //   <div id="myCarousel" className="carousel slide" data-ride="carousel">
      //     <ol className="carousel-indicators">
      //       <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
      //       <li data-target="#myCarousel" data-slide-to="1"></li>
      //       <li data-target="#myCarousel" data-slide-to="2"></li>
      //     </ol>
      //
      //     <div className="carousel-inner">
      //       <div className="item active">
      //         <img src="http://fitnesstrainingroutine.com/wp-content/uploads/2016/08/sprint-exercise.jpg" alt="Los Angeles" style={{width: '100%'}} />
      //       </div>
      //
      //       <div className="item">
      //         <img src="http://vwtcloud.com/wp-content/uploads/2016/12/3-1000x600.jpg" alt="Chicago" style={{ width: '100%'}} />
      //       </div>
      //
      //       <div className="item">
      //         <img src="https://cdn.gymaholic.co/articles/workouts/4-back/shredded-back.jpg" alt="New york" style={{width: '100%'}} />
      //       </div>
      //     </div>
      //
      //     <a className="left carousel-control" href="#myCarousel" data-slide="prev">
      //       <span className="glyphicon glyphicon-chevron-left"></span>
      //       <span className="sr-only">Previous</span>
      //     </a>
      //     <a className="right carousel-control" href="#myCarousel" data-slide="next">
      //       <span className="glyphicon glyphicon-chevron-right"></span>
      //       <span className="sr-only">Next</span>
      //     </a>
      //   </div>
      // </div>
      <div id="homepage-feature" className="carousel slide">
        <ol className="carousel-indicators">
           <li data-target="#homepage-feature" data-slide-to="0" className="active"></li>
           <li data-target="#homepage-feature" data-slide-to="1"></li>
        </ol>

        <div className="carousel-inner">
           <div className="item active" style={{"backgroundImage": "url(http://lorempixel.com/1500/600/abstract)"}}>
              <div className="carousel-caption">
                 {this.props.children}
              </div>
           </div>

           <div className="item" style={{"backgroundImage": "url(http://placehold.it/1500x600)"}}>
              <div className="carousel-caption">
                 {this.props.children}
              </div>
           </div>

        </div>
        <a className="left carousel-control" href="#homepage-feature" data-slide="prev">
          <span className="fa fa-angle-left"></span>
        </a>
        <a className="right carousel-control" href="#homepage-feature" data-slide="next">
          <span className="fa fa-angle-right"></span>
        </a>
      </div>
    );
  }
}
