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
          <button className="backButton"></button>
          <button className="playButton"></button>
          <button className="forwardButton"></button>
          <div className="songbar">
            <div className="Duration">0:00
            </div>
            <div className="slider">
              <input type="range" step="any" min="0" max="1" className="progress"></input>
              <div className="slider-track">
              </div>
              <div className="progress"></div>
            </div>
            <div className="EndDuration">3:17
            </div>

            <button className="volume"></button>

              <div className="vol">
                <input type="range" step="any" min="0" max="1" ></input>
              </div>

              <div className="songPicContainer">
                <div className="songPic"></div>
                <div className="TitleandAuthor">
                  <span className="songTitle">Title</span>
                  <span className="songAuthor">Author</span>
                </div>
              </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
