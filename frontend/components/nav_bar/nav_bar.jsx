import React from 'react';
import { Link } from 'react-router-dom';

const loggedOutNav = () => (
  <div className="nav-Bar-Main">
    <ul className="nav-Bar-List">
      <li>
        <img className="logo" src={window.logo} alt="ST Logo"/>
      </li>
      <li className="nav-Bar-Button">Charts</li>
      <li>
        <input className="search-Bar"type="text" value="Search for artists, bands, tracks, podcasts"></input>
      </li>
      <li>
        <Link to="/login" className="nav-Bar-Button">Sign In</Link>
      </li>
      <li>
        <Link to="/signup" className="nav-Bar-Button">Create Account</Link>
      </li>
    </ul>
  </div>
);

const loggedInNav = (currentUser, logout) => (
  <div className="nav-Bar-Main">
    <ul className="nav-Bar-List">
      <li>
        <img className="logo" src={window.logo} alt="ST Logo"/>
      </li>
      <li className="nav-Bar-Button">Charts</li>
      <li>
        <input className="search-Bar"type="text" value="Search for artists, bands, tracks, podcasts"></input>
      </li>
      <li className="userNav">
        <img className="userIcon" src={window.user_icon} alt="userLogo"/>
        <h2 className="nav-Bar-Button">{currentUser.username}!</h2>
      </li>
      <li>
        <button className="nav-Bar-Button" onClick={logout}>Log Out</button>
      </li>
    </ul>
  </div>
);

const navBar = ({ currentUser, logout }) => (
  currentUser ? loggedInNav(currentUser, logout) : loggedOutNav()
);

export default navBar;
