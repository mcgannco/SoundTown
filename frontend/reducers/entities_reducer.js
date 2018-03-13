import { combineReducers } from 'redux';

import songs from './song_reducer';
import comments from './comment_reducer';

export default combineReducers({
  songs,
  comments
});
