import merge from 'lodash/merge';
import { RECEIVE_SONG } from '../actions/footer_actions';

const footerReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_SONG:
      return action.song;
    default:
    return state;
  }
};

export default footerReducer;
