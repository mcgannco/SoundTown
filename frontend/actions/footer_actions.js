export const RECEIVE_SONG = "RECEIVE_SONG";

export const openModal = song => {
  return({
    type: RECEIVE_SONG,
    song
  });
};
