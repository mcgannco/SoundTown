import { connect } from 'react-redux';
import { playSong } from '../../actions/footer_actions';
import Footer from './footer';

const msp = (state) => {

  return({
    songs: Object.values(state.entities.songs),
    currentUser: state.session.currentUser,
    currentSong: state.ui.currentSong || {}
  });
};

const mdp = dispatch => {
  return({

  });
};

export default connect(
  msp,
  mdp
)(Footer);
