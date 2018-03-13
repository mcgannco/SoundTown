import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { openModal } from '../../actions/modal_actions';
import SearchBar from './searchbar';

const msp = ({session}) => {
  return({
    songs: Object.values(state.entities.songs),
    currentUser: state.session.currentUser
  })
}

const mdp = dispatch => {
  return({
    logout: () => dispatch(logout()),
    openModal: modal => dispatch(openModal(modal))
  })
}

export default connect(msp, mdp)(SearchBar);
