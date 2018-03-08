import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import mainPage from './main_page';

const msp = ({session}) => {
  return({
    currentUser: session.currentUser
  })
}


export default connect(msp, null)(mainPage);
