export const updateBanner = image => {
  return $.ajax({
    method: 'PATCH',
    url: '/api/user',
    processData: false,
    contentType: false,
    dataType: 'json',
    data: image
  });
};

export const fetchBanner = userId => {
  return $.ajax({
    method: 'GET',
    url: `api/songs/${songId}`
  });
};
