import merge from 'lodash/merge';
import { IS_PLAYING } from '../actions/isplaying_actions';

const PlayingReducer = (state = false, action) => {
  switch (action.type) {
    case IS_PLAYING:
      return action.status;
    default:
    return state;
  }
};

export default PlayingReducer;
