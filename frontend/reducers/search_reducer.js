import { merge } from 'lodash';

import { RECEIVE_SEARCHED_SONGS, CLEAR_SEARCH } from '../actions/search_actions';

export default (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_SEARCHED_SONGS:
      return(merge({}, state, action.results));
    case CLEAR_SEARCH:
      return { songs: [] };
    default:
      return state;
  }
};
