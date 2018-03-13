import { RECEIVE_SONG, RECEIVE_SONGS, REMOVE_SONG } from '../actions/song_actions';
import { RECEIVE_COMMENT} from '../actions/comment_actions';
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
    case RECEIVE_COMMENT:

      const song = state[action.comment.song_id];
      const comment_ids = song.comment_ids.slice();
      comment_ids.push(action.comment.id);
        return(merge({}, state, {[song.id]: {comment_ids: comment_ids}}));
    default:
      return state;
  }
};
