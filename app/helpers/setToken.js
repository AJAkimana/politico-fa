export const setToken = token => {
  if (localStorage.token) {
    localStorage.removeItem('token');
  }
  localStorage.setItem('token', token);
};
