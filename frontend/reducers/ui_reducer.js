import { combineReducers } from 'redux';
import modalReducer from './modal_reducer';
import footerReducer from './footer_reducer';

const uiReducer = combineReducers({
  modal: modalReducer,
  currentSong: footerReducer
});

export default uiReducer;
