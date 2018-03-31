import { connect } from 'react-redux';
import { fetchSongs } from '../../actions/song_actions';
import TrendingSongs from './trending_songs';

const msp = (state) => {

  return({
    songs: Object.values(state.entities.songs),
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
)(TrendingSongs);
