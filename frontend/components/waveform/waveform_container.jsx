import { connect } from 'react-redux';
import WaveForm from './wave_form';

const msp = (state) => ({
  playing: state.ui.isPlaying,
  currentSong: state.ui.currentSong || {},
});

const mdp = (dispatch) => ({
  playSong: (song) => dispatch(playSong(song)),
  isPlaying: (status) => dispatch(isPlaying(status))
});

export default connect(msp, mdp)(WaveForm);
