import React from 'react';
import { Link } from 'react-router-dom';

class Footer extends React.Component {

  constructor(props) {
    super(props);
  }

  play() {
    if (this.props.playing) {
      this.props.isPlaying(false);
      this.audio.pause();
    } else {
      this.props.isPlaying(true);
      this.audio.play();
    }
  }

  render() {
    
    let songPicStyle = {};
    if (this.props.currentSong.image_url) {
      songPicStyle = {backgroundImage: `url(${this.props.currentSong.image_url})`};
    }
    return(
      <div className="FooterContainer">
        <div className="PlayBar">
          <button className="backButton"></button>

          <button onClick={() => this.play()} className={!this.props.playing ? "playButton" : "pauseButton"}>
            <audio ref={(audio) => { this.audio = audio; } }
              src={this.props.currentSong.audio_url}>
            </audio>
          </button>
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

                <div className="songPic" style={ songPicStyle }>
                </div>

                <div className="TitleandAuthor">
                  <span className="songTitle">{this.props.currentSong.title}</span>
                  <span className="songAuthor">{this.props.currentSong.artist_name}</span>
                </div>
              </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
