import React from 'react';
import { Link } from 'react-router-dom';
import TrendingSongs from '../trending_songs/trending_songs'
import NavBarContainer from '.././nav_bar/nav_bar_container';
import ChartsContainer from '../song/charts_container';
import Footer from '.././footer/footer_container';


const mainPage = ({currentUser, login}) => {

const loggedOutMainPage = () => {
  const user = {username: "DemoUser", password: "123456"};
  return(
    <div className="mainPageContainer">
      <div className="IntroGreeting">
        <NavBarContainer />
        <h3>Connect on SoundTown</h3>
        <p>Discover, stream, and share a constantly expanding mix of music<br /> from emerging and major artists around the world.</p>
        <button onClick={() => login({username: "DemoUser", password: "123456"})} className="DemoTour">Demo Tour</button>
      </div>
      <div className="mainPageContent">
          <div className="SearchUpload">
            <input className="SearchBar" defaultValue="Search for artists, bands, tracks, podcasts"></input>
            <i className="fa fa-search" aria-hidden="true"></i>
            <p className="Or">or</p>
            <Link to="/upload"><button className="SearchBarButton">Upload your own</button></Link>
          </div>
          <TrendingSongs />

      </div>
    </div>
  );
};

const loggedInMainPage = () => {
  return(
    <div className="mainPageContainer">
      <div className="IntroGreetingLoggedIn">
        <NavBarContainer />
        <div className="mainPageContentLoggedIn">
          <div className="MainPageContentLeft">
            <div className="ContentOptions">
              <ul>
                <li>
                  Stream
                </li>
                <li>
                  Charts
                </li>
                <li>
                  Discover
                </li>
              </ul>
            </div>
            <div className="ContentHeader">
              <div className="Welcome">
                <h4 className="WelcomeStatement">Welcome to SoundTown</h4>
                <br />
                <p>Follow your favorite artists, labels and friends on SoundTown and see every track they post right here.</p>
              </div>
            </div>
            </div>



        <div className="ContentRight">
          <div className="ContentOptionsRight">
            <ul>
              <li>
                <i className="fas fa-users"></i> Who to follow
              </li>
              <li>
                <i className="fas fa-sync-alt"></i> Refresh
              </li>
            </ul>
          </div>
          <div className="ListeningHistory">
            <ul>
              <li>
                <i className="far fa-calendar-alt"></i> Listening history
              </li>
              <li>
                View all
              </li>
            </ul>
          </div>
          </div>
        </div>
    </div>
  
    </div>
  );
};

  return(
    currentUser ? loggedInMainPage() : loggedOutMainPage()
  );
};

export default mainPage;
