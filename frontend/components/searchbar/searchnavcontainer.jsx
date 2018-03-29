import { connect } from 'react-redux';
import { searchSongs, clearResults } from '../../actions/search_actions';
import SearchBarNav from './searchnav';

const msp = (state) => {
  return({
    songs: Object.values(state.ui.searches) || [],
    currentUser: state.session.currentUser
  })
}

const mdp = dispatch => {
  return({
    searchSongs: (query) => dispatch(searchSongs(query)),
    clearResults: () => dispatch(clearResults())
  })
}

export default connect(msp, mdp)(SearchBarNav);
