export const updateBanner = image => {
  return $.ajax({
    method: 'PATCH',
    url: '/api/users',
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

export const fetchUsers = () => {
  return $.ajax({
    method: 'GET',
    url: `api/users`
  });
};

export const fetchUser = (id) => {
  return $.ajax({
    method: 'GET',
    url: `api/users/${id}`
  });
};
