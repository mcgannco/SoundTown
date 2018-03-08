import React from 'react';
import { Link } from 'react-router-dom';


const navBar = ({currentUser, logout, openModal}) => {

  const loggedOutNav = () => (
    <div className="nav-Bar-Main">

      <ul className="nav-Bar-List">
        <li>
          <img className="logo" src={window.logo} alt="ST Logo"/>
        </li>
        <li className="nav-Bar-Button">Charts</li>
        <li>
          <input className="search-Bar"type="text" defaultValue="Search for artists, bands, tracks, podcasts"></input>
        </li>
        <li>
          <button onClick={() => openModal('login')} className="nav-Bar-Button">Sign In</button>
        </li>
        <li>
          <button onClick={() => openModal('signup')} className="nav-Bar-Button">Create Account</button>
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
          <input className="search-Bar"type="text" defaultValue="Search for artists, bands, tracks, podcasts"></input>
        </li>
        <li className="userNav">
          <img className="userIcon" src={window.user_icon} alt="userLogo"/>
          <ul className="nav-Bar-Button">{currentUser.username}</ul>
        </li>
        <li>
          <button className="nav-Bar-Button" onClick={logout}>Log Out</button>
        </li>
      </ul>
    </div>
  );

  return(
    currentUser ?
    loggedInNav(currentUser, logout) :
    loggedOutNav()
  );
}






export default navBar;
