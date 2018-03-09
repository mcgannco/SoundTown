export const createSong = song => {
  return $.ajax({
    method: 'POST',
    url: '/api/songs',
    processData: false,
    contentType: false,
    dataType: 'json',
    data: song
  });
};

export const fetchSong = songId => {
  return $.ajax({
    method: 'GET',
    url: `api/songs/${songId}`
  });
};

export const fetchSongs = () => {
  return $.ajax({
    method: 'GET',
    url: `api/songs`
  });
};
