import { connect } from 'react-redux';
import { createSong,fetchSong,fetchSongs } from '../../actions/song_actions';
import Profile from './profile';

const msp = (state) => {

  return({
    songs: Object.values(state.entities.songs),
    currentUser: state.session.currentUser
  });
};

const mdp = dispatch => {
  return({
  fetchSongs: () => dispatch(fetchSongs()),
  });
};

export default connect(
  msp,
  mdp
)(Profile);
