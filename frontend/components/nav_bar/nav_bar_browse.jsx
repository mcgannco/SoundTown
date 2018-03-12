import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';

const NavBarBrowse = ({currentUser, logout, openModal}) => {


  const loggedOutNav = () => (
    <div className="nav-BarBrowse-LoggedOut">
      <ul className="nav-BarBrowse-ListLoggedOut">
        <li>
          <ul>
          <img className="logoLoggedIn" src={window.logoin} alt="ST Logo"/>
          <div className="BrowseHomeButton"><Link to='/' className="center">Home</Link></div>
          </ul>
        </li>

        <li>
          <Link to='/charts' className="nav-Bar-Button">Charts</Link>
        </li>

        <li>
          <input className="search-Bar"type="text" defaultValue="Search for artists, bands, tracks, podcasts"></input>
        </li>

        <li>
          <div className="nav-BarBrowse-SignIn">
            <button onClick={() => openModal('login')} className="WhiteBrowseSignIn">Sign In</button>
            <button onClick={() => openModal('signup')} className="OrangeBrowseSignIn">Create Account</button>
          </div>
        </li>

      </ul>

    </div>
  );

  const loggedInNav = (currentUser, logout) => (
    <div className="nav-Bar-MainLoggedIn">
      <ul className="nav-Bar-ListLoggedIn">
        <li>
          <ul>
            <li>
              <img className="logoLoggedIn" src={window.logoin} alt="ST Logo"/>
            </li>
            <li>
                <Link to="/"><button className="nav-Bar-Button-Home">Home</button> </Link>
            </li>

          </ul>
        </li>


        <li><Link to='/charts'><span className="nav-Bar-Button">Charts</span></Link></li>


        <li>
          <input className="search-Bar"type="text" defaultValue="Search"></input>
        </li>
        <li>
          <Link to='/upload' className="nav-Bar-Button">Upload</Link>
        </li>
        <li className="userNav">
          <img className="userIcon" src={window.user_icon} alt="userLogo"/>
          <Link to={`/users/${currentUser.id}`} className="nav-Bar-Button">{currentUser.username}</Link>
        </li>
        <li>
          <Link to='/' className="nav-Bar-Button" onClick={logout}>Log Out</Link>
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






export default NavBarBrowse;
