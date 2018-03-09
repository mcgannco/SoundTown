import React from 'react';
import { Link } from 'react-router-dom';


const navBar = ({currentUser, logout, openModal}) => {

  const loggedOutNav = () => (
    <div className="nav-Bar-MainLoggedOut">

      <ul className="nav-Bar-ListLoggedOut">
        <li>
          <div className="LogoContainer">
          <img className="logoLoggedOut" src={window.logo} alt="ST Logo"/>
          <h2 className="SoundTown">SoundTown</h2>
          </div>
        </li>

        <li>
          <div>
            <button onClick={() => openModal('login')} className="WhiteSignIn">Sign In</button>
            <button onClick={() => openModal('signup')} className="OrangeSignIn">Create Account</button>
          </div>
        </li>

      </ul>

    </div>
  );

  const loggedInNav = (currentUser, logout) => (
    <div className="nav-Bar-MainLoggedIn">
      <ul className="nav-Bar-ListLoggedIn">
        <li>
          <img className="logoLoggedIn" src={window.logoin} alt="ST Logo"/>
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
