import * as APIUtil from '../util/song_util';
export const RECEIVE_SONG = "RECEIVE_SONG";
export const RECEIVE_SONGS = "RECEIVE_SONGS";
export const RECEIVE_SONG_ERRORS = "RECEIVE_SONG_ERRORS";

export const receiveSong = song => ({
  type: RECEIVE_SONG,
  song
});

export const receiveSongs = songs => ({
  type: RECEIVE_SONGS,
  songs
});

export const receiveErrors = errors => {
  return({
    type: RECEIVE_SONG_ERRORS,
    errors
  });
};

export const createSong = song => dispatch => {
  return(
    APIUtil.createSong(song).then(song => dispatch(receiveSong(song)),
  err => dispatch(receiveErrors(err.responseJSON))));
};

export const fetchSong = songId => dispatch => {
  return(
    APIUtil.fetchSong(songId).then(song => dispatch(receiveSong(song)),
  err => dispatch(receiveErrors(err.responseJSON))));
};

export const fetchSongs = () => dispatch => {
  return(
    APIUtil.fetchSongs().then(songs => dispatch(receiveSongs(songs)),
  err => dispatch(receiveErrors(err.responseJSON))));
};
