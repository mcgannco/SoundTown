import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { openModal } from '../../actions/modal_actions';
import NavBarBrowse from './nav_bar_browse';

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

export default connect(msp, mdp)(NavBarBrowse);
