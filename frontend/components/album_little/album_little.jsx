import React from 'react';
import { Link } from 'react-router-dom';



class AlbumLittle extends React.Component {

  constructor(props) {
    super(props);
    this.state = { play: false };
    this.play = this.play.bind(this);
  }

  play() {
    if (this.state.play) {
      this.setState({ play: false });
      this.audio.pause();
    } else {
      this.setState({ play: true });
      this.audio.play();
    }
  }

  render() {
    return(
      <div className="AlbumContainer">
        <audio ref={(audio) => { this.audio = audio; } }
          src={this.props.song}>
        </audio>
        <div onClick={this.play} className={!this.state.play ? "albumplay" : "albumpause"} />
      </div>
    );
  }
}

export default AlbumLittle;
