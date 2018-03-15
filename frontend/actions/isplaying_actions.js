export const IS_PLAYING = "IS_PLAYING";

export const isPlaying = (status) => {

  return({
    type: IS_PLAYING,
    status
  });
};
