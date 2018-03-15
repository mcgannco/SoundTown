export const PLAY_SONG = "PLAY_SONG";

export const playSong = song => {
  
  return({
    type: PLAY_SONG,
    song
  });
};
