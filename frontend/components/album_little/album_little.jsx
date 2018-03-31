import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { playSong } from '../../actions/footer_actions';
import { isPlaying } from '../../actions/isplaying_actions';

class AlbumLittle extends React.Component {

  constructor(props) {
    super(props);
    this.play = this.play.bind(this);
    this.playClicked = this.playClicked.bind(this);
  }

  play() {

    if (this.props.playing  && this.props.songObj.id === this.props.currentSong.id) {
      this.props.isPlaying(false);

    } else {
      this.props.isPlaying(true);

    }
  }

  playClicked() {
    this.props.playSong(this.props.songObj);
    this.play();
  }

  playorpause() {
    return (this.props.playing  && (this.props.songObj.id === this.props.currentSong.id));
  }

  render() {
    return(
      <div className="AlbumContainer">

        <div onClick={() => this.playClicked()} className={this.playorpause() ? "albumpause" : "albumplay"} />
      </div>
    );
  }
}

const msp = (state) => {

  return({
    playing: state.ui.isPlaying,
    currentSong: state.ui.currentSong || {},
  });
};

const mdp = (dispatch) => {

  return({
  playSong: (song) => dispatch(playSong(song)),
  isPlaying: (status) => dispatch(isPlaying(status))
  });
};

export default connect(
  msp,
  mdp
)(AlbumLittle);
