import React from 'react';
import ReactDOM from 'react-dom';
import { signup, login, logout } from './util/session_api_util';

//testing start
window.signup = signup;
window.login = login;
window.logout = logout;
//testing end


document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  ReactDOM.render(<h1>Welcome to Sound Town!</h1>, root);
});
