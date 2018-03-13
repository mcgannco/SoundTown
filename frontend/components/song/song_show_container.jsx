import { connect } from 'react-redux';
import { createSong,fetchSong,fetchSongs } from '../../actions/song_actions';
import SongShow from './song_show';

const msp = (state, ownProps) => {
const song = state.entities.songs[ownProps.match.params.songId];
  return({
    song,
    currentUser: state.session.currentUser
  });
};

const mdp = dispatch => {
  return({
    fetchSong: (id) => dispatch(fetchSong(id)),
  });
};

export default connect(
  msp,
  mdp
)(SongShow);
