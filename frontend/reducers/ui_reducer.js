import { combineReducers } from 'redux';
import modalReducer from './modal_reducer';
import footerReducer from './footer_reducer';
import PlayingReducer from './is_playing_reducer';
import SearchReducer from './search_reducer';

const uiReducer = combineReducers({
  modal: modalReducer,
  currentSong: footerReducer,
  isPlaying: PlayingReducer,
  searches: SearchReducer,
});

export default uiReducer;
