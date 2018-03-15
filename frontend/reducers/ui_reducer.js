import { combineReducers } from 'redux';
import modalReducer from './modal_reducer';
import footerReducer from './footer_reducer';
import PlayingReducer from './is_playing_reducer';

const uiReducer = combineReducers({
  modal: modalReducer,
  currentSong: footerReducer,
  isPlaying: PlayingReducer
});

export default uiReducer;
