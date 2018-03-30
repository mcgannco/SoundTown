import React from 'react';
import { Link } from 'react-router-dom';

class Footer extends React.Component {

  constructor(props) {
    super(props);
    this.play = this.play.bind(this);
    this.state = {currentSong: this.props.currentSong};
    this.setVolume = this.setVolume.bind(this);
    this.currentTime = this.currentTime.bind(this);
    this.setTime = this.setTime.bind(this);
    this.showDuration = this.showDuration.bind(this);
    this.songlength = this.songlength.bind(this);
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

  componentWillReceiveProps(newProps) {
    if (this.props.currentSong.id !== newProps.currentSong.id) {
      this.setState({currentSong: newProps.currentSong});
    }
  }

  componentDidUpdate() {
    if(this.props.playing) {
      this.audio.play();
    } else {
      this.audio.pause();
    }
  }

  setVolume(e) {
    if (this.state.currentSong) {
      this.audio.volume = (e.currentTarget.value)
    }
  }

  songlength() {

    if (Object.getOwnPropertyNames(this.state.currentSong).length === 0) {
      return 0;
    } else if (isNaN(this.audio.duration)){
          return 0;
    } else {
      return this.audio.duration;
    }
  }

  setTime(e){
    if (this.state.currentSong) {
      this.audio.currentTime = (e.currentTarget.value)
    }
  }

  showDuration() {
    if (Object.getOwnPropertyNames(this.state.currentSong).length === 0) {
      return '';
    } else if (isNaN(this.audio.duration)){
        return "";
      } else {
      let minutes = Math.floor(this.audio.duration/60)
      let seconds = Math.floor(this.audio.duration%60)
      if(seconds < 10){
        return `${minutes}:0${seconds}`
      }else{
        return `${minutes}:${seconds}`
      }
    }
  }

  currentTime() {
    if (Object.getOwnPropertyNames(this.state.currentSong).length === 0) {
      return '0:00'
      } else{
      let minutes = Math.floor(this.audio.currentTime/60)
      let seconds = Math.floor(this.audio.currentTime%60)
      if(seconds < 10){
        return `${minutes}:0${seconds}`
      }else{
        return `${minutes}:${seconds}`
      }
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
              src={this.state.currentSong.audio_url}
              onTimeUpdate={() => {this.setState({ currentTime: this.audio.currentTime })}}
              >

            </audio>
          </button>
          <button className="forwardButton"></button>
          <div className="songbar">
            <div>
              <input
                className="Duration"
                type="text" readOnly
                value={this.currentTime()}
                onChange={this.setTime}
                />
            </div>
            <div className="slider">
              <input type="range" min = "0" max={this.songlength()} step="0.001" value={this.state.currentTime} onChange={this.setTime} className="progress"></input>
              <div className="slider-track">
              </div>
              <div className="progress"></div>
            </div>
            <div>
              <input
                className="EndDuration"
                type="text" readOnly
                value={this.showDuration()}
                />
            </div>

            <button className="volume"></button>

              <div className="vol">
                <input onChange={this.setVolume}type="range" step="any"></input>
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
