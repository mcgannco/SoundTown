import { connect } from 'react-redux';
import { createSong,fetchSong,fetchSongs } from '../../actions/song_actions';
import UploadForm from './upload_form';

const msp = (state) => {

  return({
    songs: Object.values(state.entities.songs),
    currentUser: state.session.currentUser
  });
};

const mdp = dispatch => {
  return({
    fetchSongs: () => dispatch(fetchSongs()),
    createSong: (song) => dispatch(createSong(song))
  });
};

export default connect(
  msp,
  mdp
)(UploadForm);
