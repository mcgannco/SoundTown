import React from 'react';
import { Link } from 'react-router-dom';
import TrendingSongs from '../trending_songs/trending_songs'
import NavBarContainer from '.././nav_bar/nav_bar_container';


const loggedOutMainPage = () => {
  const user = {username: "DemoUser", password: "123456"};
  return(
    <div className="mainPageContainer">
      <div className="IntroGreeting">
        <NavBarContainer />
        <h3>Connect on SoundTown</h3>
        <p>Discover, stream, and share a constantly expanding mix of music<br /> from emerging and major artists around the world.</p>
      </div>
      <div className="mainPageContent">
          <div className="SearchUpload">
            <input className="SearchBar" defaultValue="Search for artists, bands, tracks, podcasts"></input>
            <i className="fa fa-search" aria-hidden="true"></i>
            <p className="Or">or</p>
            <button className="SearchBarButton">Upload your own</button>
          </div>
          <h3>Hear what’s trending for free in the SoundTown community</h3>
          <h3>Hear what’s trending for free in the SoundTown community</h3>
          <h3>Hear what’s trending for free in the SoundTown community</h3>
          <h3>Hear what’s trending for free in the SoundTown community</h3>
          <h3>Hear what’s trending for free in the SoundTown community</h3>
          <h3>Hear what’s trending for free in the SoundTown community</h3>
          <h3>Hear what’s trending for free in the SoundTown community</h3>
          <h3>Hear what’s trending for free in the SoundTown community</h3>
          <h3>Hear what’s trending for free in the SoundTown community</h3>
          <h3>Hear what’s trending for free in the SoundTown community</h3>
          <h3>Hear what’s trending for free in the SoundTown community</h3>
          <h3>Hear what’s trending for free in the SoundTown community</h3>
          <h3>Hear what’s trending for free in the SoundTown community</h3>
          <h3>Hear what’s trending for free in the SoundTown community</h3>
          <h3>Hear what’s trending for free in the SoundTown community</h3>
          <h3>Hear what’s trending for free in the SoundTown community</h3>
          <h3>Hear what’s trending for free in the SoundTown community</h3>
          <h3>Hear what’s trending for free in the SoundTown community</h3>
          <TrendingSongs />
      </div>
    </div>
  );
};

const loggedInMainPage = () => {
  return(
    <div className="mainPageContainer">
      <NavBarContainer />
      <div className="mainPageContent">

      </div>

    </div>
  );
};


const mainPage = ({ currentUser }) => {

  return(
    currentUser ? loggedInMainPage() : loggedOutMainPage()
  );
};

export default mainPage;
