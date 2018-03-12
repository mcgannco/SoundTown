import { connect } from 'react-redux';
import { createSong,fetchSong,fetchSongs } from '../../actions/song_actions';
import SongShow from './song_show';

const msp = (state) => {

  return({
    songs: Object.values(state.entities.songs),
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
