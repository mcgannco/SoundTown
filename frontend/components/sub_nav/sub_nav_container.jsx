import SubNav from './sub_nav';
import { connect } from 'react-redux';


const msp = (state) => {
  return({
    currentUser: state.session.currentUser
  })
}

const mdp = dispatch => {
  return({

  })
}

export default connect(msp, mdp)(SubNav);
