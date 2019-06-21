import React, {Component} from 'react'

class HomePage extends Component {
  render() {
    return (
      <div className="home-container">
        <h1 className="main-title">
          Nickolas Quinn
        </h1>
        <div className="images-container">
          <img className="beach" src="./beach.jpg" alt="nick on the beach" />
          <img className="desk" src="./desk.jpg" alt="nick on a desk" />
          <img className="darkpose" src="./darkpose.jpg" alt="nick head to knee" />
        </div>
      </div>
    )
  }
}

export default HomePage
