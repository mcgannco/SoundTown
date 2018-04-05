import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
//will delete these imports later....for testing
import { signup, login, logout } from './actions/session_actions';
import { fetchSong, fetchSongs } from './actions/song_actions';
import { fetchUsers } from './actions/user_actions';

//testing start
// window.signup = signup;
// window.login = login;
// window.logout = logout;
// window.fetchSong = fetchSong;
// window.fetchSongs = fetchSongs;
// window.fetchUsers = fetchUsers;
//testing end


document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
    delete window.currentUser;
    window.getState = store.getState;
    // window.dispatch = store.dispatch;
  } else {
    store = configureStore();
    window.getState = store.getState;
    // window.dispatch = store.dispatch;
  }
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
});
