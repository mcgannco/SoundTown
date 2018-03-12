import { RECEIVE_SONG, RECEIVE_SONGS, REMOVE_SONG } from '../actions/song_actions';
import { merge } from 'lodash';

export default (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SONGS:
      return(merge({}, state, action.songs));
    case RECEIVE_SONG:
      return(merge({}, state, {[action.song.id]: action.song }));
    case REMOVE_SONG:
      let newState = merge({}, state);
      delete newState[action.songId];
      return newState;
    default:
      return state;
  }
};
