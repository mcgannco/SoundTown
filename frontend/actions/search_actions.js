import * as APIUtil from '../util/search_util';
export const RECEIVE_SEARCHED_SONGS = "RECEIVE_SEARCHED_SONGS";
export const CLEAR_SEARCH = "CLEAR_SEARCH";

export const receiveSearchResults = results => {
  return {
    type: RECEIVE_SEARCHED_SONGS,
    results
  };
};

export const clearResults = () => {
  return {
    type: CLEAR_SEARCH
  };
};

export const searchSongs = query => dispatch => {
  return APIUtil.searchSongs(query).then(results => {
    return dispatch(receiveSearchResults(results));
  });
};
