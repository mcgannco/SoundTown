import React from 'react';
import { Link } from 'react-router-dom';

class Footer extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      is_playing: false,
      progress: 0,
      in_set_progress_mode: false
    };
      
  }

  render() {
    return(
      <div className="FooterContainer">
        <div className="PlayBar">
          <button className="playButton"></button>
          <div className="songbar">
            <div className="Duration">0:00
            </div>
            <div className="slider">
              <input type="range" step="any" min="0" max="1" className="progress"></input>
              <div className="slider-track">
              </div>
              <div className="progress"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
