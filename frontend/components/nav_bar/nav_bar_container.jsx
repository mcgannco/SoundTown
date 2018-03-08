import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { openModal } from '../../actions/modal_actions';
import navBar from './nav_bar';

const msp = ({session}) => {
  return({
    currentUser: session.currentUser
  })
}

const mdp = dispatch => {
  return({
    logout: () => dispatch(logout()),
    openModal: modal => dispatch(openModal(modal))
  })
}

export default connect(msp, mdp)(navBar);
