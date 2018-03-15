import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { playSong } from '../../actions/footer_actions';

class AlbumLittle extends React.Component {

  constructor(props) {
    super(props);
    this.state = { play: false };
    this.play = this.play.bind(this);
    this.playClicked = this.playClicked.bind(this);
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

  playClicked() {
    this.play();
    this.props.playSong(this.props.songObj);
  }

  render() {

    return(
      <div className="AlbumContainer">
        <audio ref={(audio) => { this.audio = audio; } }
          src={this.props.song}>
        </audio>
        <div onClick={() => this.playClicked()} className={!this.state.play ? "albumplay" : "albumpause"} />
      </div>
    );
  }
}

const msp = (state) => {

  return({

  });
};

const mdp = (dispatch) => {

  return({
  playSong: (song) => dispatch(playSong(song))
  });
};

export default connect(
  msp,
  mdp
)(AlbumLittle);
