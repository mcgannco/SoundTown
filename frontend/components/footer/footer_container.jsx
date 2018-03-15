import { connect } from 'react-redux';
import { playSong } from '../../actions/footer_actions';
import { isPlaying } from '../../actions/isplaying_actions';

import Footer from './footer';

const msp = (state) => {

  return({
    songs: Object.values(state.entities.songs),
    currentUser: state.session.currentUser,
    currentSong: state.ui.currentSong || {},
    playing: state.ui.isPlaying,
  });
};

const mdp = dispatch => {
  return({
    playSong: (song) => dispatch(playSong(song)),
    isPlaying: (status) => dispatch(isPlaying(status))
  });
};

export default connect(
  msp,
  mdp
)(Footer);
