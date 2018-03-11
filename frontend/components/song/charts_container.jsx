import { connect } from 'react-redux';
import { createSong,fetchSong,fetchSongs } from '../../actions/song_actions';
import Charts from './charts';

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
)(Charts);
