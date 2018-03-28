export const searchSongs = ({query}) => {
  return $.ajax({
    method: "GET",
    url: `api/songs`,
    data: { query }
  });
};
