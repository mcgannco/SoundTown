import merge from 'lodash/merge';
import { PLAY_SONG } from '../actions/footer_actions';

const footerReducer = (state = {}, action) => {
  switch (action.type) {
    case PLAY_SONG:
      return action.song;
    default:
    return state;
  }
};

export default footerReducer;
