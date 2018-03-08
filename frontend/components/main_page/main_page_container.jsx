import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { login } from '../../actions/session_actions';
import mainPage from './main_page';

const msp = ({session}) => {
  return({
    currentUser: session.currentUser
  })
}

const mdp = dispatch => {
  return({
    login: (user) => dispatch(login(user)),
  })
}


export default connect(msp, mdp)(mainPage);
